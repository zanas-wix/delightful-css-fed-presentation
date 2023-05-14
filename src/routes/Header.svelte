<script>
	import { page } from '$app/stores';

	const routes = [
		{
			name: 'Cascade layers',
			href: '/cascade-layers'
		},
		{
			name: 'Container queries',
			href: '/container-queries'
		},
		{
			name: ':where selector',
			href: '/where-selector'
		}
	];
</script>

<nav>
	{#each routes as { href, name }}
		<a aria-current={$page.route.id === href ? 'page' : null} {href}>{name}</a>
	{/each}
</nav>

<style>
	nav {
		position: sticky;
		inset-block-start: 0.5rem;
		backdrop-filter: contrast(2) blur(0.25rem);
		z-index: 1;
		display: grid;
		grid-auto-flow: column;
		place-content: center;
		gap: 2rem;
		margin: 2rem auto;
		border-radius: 1rem;
		box-shadow: var(--shadow-elevation-medium);
		padding: 1rem 2rem;
		width: fit-content;
		background: rgb(255 255 255 / 0.84);
	}

	a {
		font-weight: 600;
		text-decoration-thickness: 1px;
		text-decoration-color: transparent;
		text-decoration-style: wavy;
		text-decoration-skip-ink: none;
		text-underline-offset: 0.3em;
		color: var(--text-color-200);
	}

	a:hover {
		color: var(--text-color-300);
	}

	a[aria-current] {
		text-decoration-color: var(--primary);
		color: var(--primary);
	}
</style>
