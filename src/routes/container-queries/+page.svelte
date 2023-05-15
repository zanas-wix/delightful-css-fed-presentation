<script>
	import Stock from './Stock.svelte';

	export let data;
</script>

<div class="container">
	{#each data.stocks as s}	
		<div class="stock-stats">
			<header>
				<div>
					<h2>{s.symbol}</h2>
					<strong>{s.price}$</strong> <span class="text-success">+{s.change} ({s.changePercent}%)</span><br/>
					<small>({s.broker}:{s.symbol})</small>
				</div>
				<div class="pretty-image">
					<img aria-hidden="true" src={`https://storage.googleapis.com/iex/api/logos/${s.symbol}.png`} alt={s.symbol + ' Logo'}>
					<img src={`https://storage.googleapis.com/iex/api/logos/${s.symbol}.png`} alt={s.symbol + ' Logo'}>
				</div>
			</header>
			<figure>
				<Stock />
				<figcaption> <time><small>May 15, 14:10 EDT</small></time> </figcaption>
			</figure>
			<div class="details">
				<dl>
					<dt>Open</dt>
					<dd>{s.open}</dd>
					<dt>High</dt>
					<dd>{s.high}</dd>
					<dt>Low</dt>
					<dd>{s.low}</dd>
				</dl>
				<dl>
					<dt>52 week high</dt>
					<dd>{s.week52High}</dd>
					<dt>52 week low</dt>
					<dd>{s.week52Low}</dd>
				</dl>
				<dl>
					<dt>Volume</dt>
					<dd>{s.volume}</dd>
					<dt>Market cap</dt>
					<dd>{s.marketCap}</dd>
				</dl>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		background: var(--base-800);
		border-radius: var(--radius);
		container-type: size;
		inline-size: 600px;
		margin-inline: auto;
		min-inline-size: 12rem;
		max-inline-size: 60vw;
		block-size: 80vh;
		overflow: scroll;
		padding: 1rem;
		resize: both;
		border: 1px solid rgb(0 0 0 / 12%);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.stock-stats {
		--template-areas:  
			'🐶 📈'
			'🤑 🤑';
		--detail-template-columns: 1fr 1fr 1fr;
		--chart-aspect-ratio: 2 / 1;
		
		display: grid;
		grid-template-areas: var(--template-areas);
		grid-auto-columns: 1fr;
		gap: 1rem;
		border-radius: var(--radius);
		padding: 1rem;
		overflow: auto;
		flex: 0 0 auto;
	}

	.stock-stats :global(svg) {
		width: 100%;
		height: auto;
		aspect-ratio: var(--chart-aspect-ratio);
		color: var(--primary);
		background: linear-gradient(45deg, hsl(var(--secondary-hsl) / 10%), var(--base-100));
		border-radius: calc(var(--radius) - 0.5rem);
		box-shadow: var(--shadow-elevation-medium);
		padding: 1rem;
	}

	.stock-stats :global(svg path) { stroke: currentColor; }
	.stock-stats :global(svg circle) { fill: currentColor; }

	.details {
		display: grid;
		grid-template-columns: var(--detail-template-columns);
		gap: 0.5rem 1rem;
		align-items: start;
		grid-area: 🤑;
	}

	figure {
		grid-area: 📈;
		margin-block: 0;
		margin-inline: 0;
	}

	header {
		grid-area: 🐶;
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	small {
		color: var(--text-color-100);
		font-size: 0.75em;
		font-weight: normal;
	}

	img {
		aspect-ratio: 1 / 1;
		inline-size: 64px;
		border-radius: calc(var(--radius) - 0.5rem);
	}
 

	h2 {
		font-size: clamp(1rem, 0.5rem + 5cqi, 3rem);;
	}

	@container (max-width: 600px) {
		.stock-stats {
			--template-areas: 
				'🐶'
				'📈'
				'🤑';
			--detail-template-columns: 1fr 1fr;
			--chart-aspect-ratio: 3 / 1;
		}
	}
	
	@container (max-width: 400px) {
		.stock-stats {
			--template-areas: 
				'🐶'
				'🤑';
			--detail-template-columns: 1fr;
		}

		header {
			flex-direction: row-reverse;
			justify-content: start;
			
		}


		figure {
			display: none;
		}
	}


	.container::-webkit-scrollbar {
		width: 1rem;
	}

	.container::-webkit-resizer {
		width: 1rem;
		height: 1rem;
		border-radius: 1rem;
		background: rgb(0 0 0 / 24%);
		background-image: none;
	}

	.stock-stats {
		background: var(--base-100);
	}
</style>
