<script>
  //TODO: Check auth for admin (me) and standard spotify login for nav
</script>

<main>
  <nav id="nav">
    <ul>
      <li>Home</li>
      <li>Stats</li>
      <li>Admin</li>
    </ul>
  </nav>
</main>

<style>
#nav{
  display: flex;
  margin: 0 auto;
  border: 1px solid blue;
  align-content: center;
}
ul{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: max-content;
  grid-column-gap: 25px;
  padding: 0px;
}
li {
  text-align: center;
  list-style: none;
  color: white;
  background-color: gray;
  padding: 5% ;
  border: 4px solid black;
  border-radius: 2.5rem;
}
</style>