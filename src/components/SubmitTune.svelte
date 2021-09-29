<script>
import { submittedTunes } from '../stores/tuneStore';

 function getMaxId() {
    let id = Math.max.apply(Math, $submittedTunes.map(function(o) { return o.id; }));
    return id ;
  }
//"https://open.spotify.com/embed/track/3vYxoh9Y7L5Tdr0mhaAaUu?theme=0"
	function validateIdThenAdd(spotifyLink) {
		let trackId = spotifyLink.toString().split("/")[5].split('?')[0];
		console.log(trackId);
		//add(trackId);
	}

 function add(input) {
    // get max id to ensure we don't repeat/miss any ids out.
    let newId = getMaxId() + 1;
    console.log(newId);

		const tune = {
			id: newId, 
			hasBeenReviewed: false, 
			submittedBy: 'TBC', 
			spotifyUrl: input.value,
			isLiked: null,
			dateSubmitted: new Date().toLocaleDateString()
		};

		$submittedTunes = [tune, ...$submittedTunes];
		input.value = '';
	}
</script>


<main>
	<h2>
		Submit a tune
	</h2>
	<input type="text" 
	 placeholder="paste a spotify link or track id here"
	 on:keydown={e => e.key === 'Enter' && validateIdThenAdd(e.target.value.toString())}
	/>

</main>

<style>
	input {
		width: 100%;
		font-size: 1.4em;
		grid-column: 1/3;
	}
</style>
