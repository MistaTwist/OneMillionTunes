<script>
	import SubmitTune from "./components/SubmitTune.svelte";
	import SubmissionFeed from "./components/SubmissionFeed.svelte";
</script>

<main>
	<h1>One Million Tunes (mvp)</h1>

	<h4>I'm on a mission to see if I can find 1 million tunes that I like.</h4>
	<h4>Wanna help me find them? Just look up a tune from spotify below!</h4>
	<iframe title="Spotify player for Ben Bohmer's Fleiderling" src="https://open.spotify.com/embed/track/7kltLoEOuwwSNsCZChIaj9?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
	<SubmitTune />
	<SubmissionFeed />
</main>

<style>
	:root {
		background-color: white;
	}
	main {
		padding: 1em;
		max-width: 60%;
		color:#853FFA;
	}
	
	h1 {
		color: #313BCB;
		font-size: 4em;
		font-weight: bolder;
		display: inline-block;
	}

</style>