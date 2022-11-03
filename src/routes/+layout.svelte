<div class="site">
    <header>
      <h1>Daniele Pezzatini</h1>
      
      <nav>
        <a href="#work">WORK</a> / 
        <a href="#research">Research</a> /
        <a href="#teaching">Teaching</a> /
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <div class="main">
      <slot />
    </div>
</div>

<style>
  :global(body) {
    background-color: #fff;
    color: #333;
    font-family: 'Lora', serif;
    
    margin: 0px;
    padding: 2em;
  }
  .site {
    margin: 1em auto;
		max-width: 820px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.7em;
    letter-spacing: 0.03em;
    /*color: #624d75*/

  }

  header {
    margin-bottom: 4em;
    display: flex;
    align-items: center;
  }
  nav{
    margin-left: auto
  }

  nav a {
    text-decoration: none;
    color: black;
    font-family: 'Poppins';
    font-weight: 300;
    text-transform: uppercase;
  }

  nav a:hover {
    text-decoration: underline;
  }


  .main {
    font-size: 1.1em;
    line-height: 1.5em;
    letter-spacing: 0.025em;
  }
  
@media only screen and (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }

  nav{
    margin-left: 0px;
  }
}
</style>
