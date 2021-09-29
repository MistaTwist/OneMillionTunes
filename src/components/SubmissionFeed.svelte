<script>
	import { submittedTunes } from '../stores/tuneStore';
	//import { Tune } from './Tune.svelte';
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
		border: 4px solid black;
		border-radius: 0.3em;
    padding: 10px;
		background: white;
    color: black;
		margin-bottom: 10px;
	}
	.tune__liked {
		background-color: #bada55;
	}
</style>