
<script>
  export let tune;
  // function timestampToDate(timestamp) {
  //   return `${timestamp.toDate().toLocaleDateString()}`;
  // }
</script>

<main>
  <div class="tune {!tune.hasBeenReviewed 
    ? "tune" 
    : tune.isLiked
      ? 'tune__liked' 
      : 'tune__disliked'
  }">
    <span>
      <div>
        <iframe title="Spotify player" 
        src="https://open.spotify.com/embed/track/{tune.spotifyUrl}?theme=0" 
        width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <!-- <div>Submitted By: {tune.submittedBy} on {timestampToDate(tune.dateSubmitted)}</div> -->
      <div>Submitted By: {tune.submittedBy} on {tune.dateSubmitted.toDate().toLocaleDateString()}</div>
      <div>Reviewed? {tune.hasBeenReviewed === true ? '✔' : '❌'}</div>
    </span>
  </div>
</main>

<style>
	.tune {
		border: 4px solid black;
		border-radius: 0.3em;
    padding: 10px;
		background: white;
    color: black;
		margin-bottom: 1rem;
	}
	.tune__liked {
		background-color: #25BB90;
	}
	.tune__disliked {
		background-color: #B0000B;
	}
</style>