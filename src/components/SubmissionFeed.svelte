<script>
	import { submittedTunes } from '../stores/tuneStore';
	//import { Tune } from './Tune.svelte';
</script>

<main>
	<div class="submissionFeed">
		<h2>Recent Submissions:</h2>
		{#each $submittedTunes as tune} 
		<div class="tune {tune.isLiked ? 'tune__liked' : ''}">
			<span>
				<div>
					<iframe title="Spotify player" 
					src="https://open.spotify.com/embed/track/{tune.spotifyUrl}?theme=0" 
					width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
				</div>
				<div>Submitted By: {tune.submittedBy} on {tune.dateSubmitted}</div>
				<div>Reviewed? {tune.hasBeenReviewed === true ? '✔' : '❌'}</div>
			</span>
		</div>
		{/each}
	</div>
</main>

<style>
	.submissionFeed{
		border: 5px solid yellow;
	}
	.tune {
		border: 4px solid black;
		border-radius: 0.3em;
    padding: 10px;
		background: white;
    color: black;
		margin-bottom: 1rem;
	}
	.tune__liked {
		background-color: #bada55;
	}
</style>