<script>
  import { submittedTunes } from '../stores/tuneStore';
</script>

<main>
  <h3>Recent Submissions:</h3>
	{#each $submittedTunes as tune} 
		<div class="tune {tune.isLiked ? 'tune__liked' : ''}">
			<span>
				<div>{tune.spotifyUrl}</div>
				<div>Submitted By: {tune.submittedBy} on {tune.dateSubmitted}</div>
				<div>Reviewed? {tune.hasBeenReviewed === true ? '✔' : '❌'}</div>
			</span>
		</div>
	{/each}
</main>

<style>
  	.tune {
		border: 1px solid black;
		border-radius: 0.3em;
    padding: 10px 20px;
		background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    color: white;
		margin-bottom: 10px;
	}
	.tune__liked {
		background-color: #bada55;
	}
</style>