<div class="site">
	<nav>
		<a class="nav-name" href="/">Daniele Pezzatini</a>
		<ul class="nav-links">
			<li><a href="#work">Work</a></li>
			<li><a href="#collab">Collaborate</a></li>
			<li><a href="#background">Background</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	<slot />
	<footer>
		<span>Daniele Pezzatini &middot; Milan, Italy</span>
		<span>d.pezzatini@gmail.com</span>
	</footer>
</div>

<style>
	:global(:root) {
		--black: #111111;
		--off-white: #f5f3ef;
		--mid: #888880;
		--accent: #c8440a;
		--border: #e0ddd8;
		--max: 720px;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(html) {
		font-size: 17px;
	}

	:global(body) {
		font-family: 'DM Sans', sans-serif;
		background: var(--off-white);
		color: var(--black);
		line-height: 1.65;
		font-weight: 300;
	}

	.site {
		max-width: var(--max);
		margin: 0 auto;
		padding: 0 2rem;
	}

	nav {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 2.8rem 0 2rem;
		border-bottom: 1px solid var(--border);
	}

	.nav-name {
		font-weight: 500;
		font-size: 1rem;
		letter-spacing: 0.01em;
		color: var(--black);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
	}

	.nav-links a {
		font-size: 0.82rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--mid);
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--black);
	}

	footer {
		padding: 2.5rem 0;
		font-size: 0.78rem;
		color: var(--mid);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (max-width: 600px) {
		:global(html) {
			font-size: 16px;
		}

		nav {
			flex-direction: column;
			gap: 1.2rem;
		}
	}
</style>
