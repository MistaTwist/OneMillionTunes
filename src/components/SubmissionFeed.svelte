<script>
	import Tune from './Tune.svelte';
	export let submissions = {};
</script>

<main>
	<div class="submissionFeed">
		<h2>Recent Submissions:</h2>
		{#each submissions as tune }
			<Tune tune={tune} />
		{/each}
	</div>
</main>

<style>
	.submissionFeed{
		padding: 0px;
	}
</style>