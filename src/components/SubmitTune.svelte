<script>
import { submittedTunes } from '../stores/tuneStore';

 function getMaxId() {
    let id = Math.max.apply(Math, $submittedTunes.map(function(o) { return o.id; }));
    return id ;
  }

	function validateIdThenAdd(input) {
		let trackId = '';
		let spotifyLink = input.value;
		let sLink = spotifyLink.toString();

		if(sLink.startsWith('https://open.spotify.com/track/')){
			trackId = sLink.split("https://open.spotify.com/track/")[1].toString().split('?')[0]
		}

		if(trackId.length > 0) {
			add(trackId);
		}
		input.value = '';
	}

 function add(trackId) {
    // get max id to ensure we don't repeat/miss any ids out.
    let newId = getMaxId() + 1;
    console.log(newId);

		const tune = {
			id: newId, 
			hasBeenReviewed: false, 
			submittedBy: 'TBC', 
			spotifyUrl: trackId,
			isLiked: null,
			dateSubmitted: new Date().toLocaleDateString()
		};

		$submittedTunes = [tune, ...$submittedTunes];
	}
</script>


<main>
	<h2>
		Submit a tune
	</h2>
	<input type="text" 
	 placeholder="paste a spotify link or track id here"
	 on:keydown={e => e.key === 'Enter' && validateIdThenAdd(e.target)}
	/>

</main>

<style>
	input {
		width: 100%;
		font-size: 1.4em;
		grid-column: 1/3;
	}
</style>
