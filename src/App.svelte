<script>
	import SubmitTune from "./components/SubmitTune.svelte";
	import SubmissionFeed from "./components/SubmissionFeed.svelte";
</script>

<main>
	<h1>One Million Tunes (mvp)</h1>

	<h4>I'm on a mission to see if I can find 1 million tunes that I like.</h4>
	<h4>Wanna help me find them? Just look up a tune from spotify below!</h4>
	<SubmitTune />
	<SubmissionFeed />
</main>

<style>
	:root {
		box-sizing: border-box;
		display: block;
		background: rgb(131,58,180);
		background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 100%, rgba(252,176,69,1) 100%);
	}
	main {
		padding: 1em;
		max-width: 60%;
		color: white;
	}
	
	h1 {
		font-size: 4em;
		font-weight: bolder;
		display: inline-block;
	}

</style>