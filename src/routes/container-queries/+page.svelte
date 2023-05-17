<script>
	import ArrowTopRight from './ArrowTopRight.svelte';
import Stock from './Stock.svelte';

	export let data;
</script>


<div class="container">
	<div class="scroller">
		{#each data.stocks as s}
			<div role="button" tabindex="0" class="stock-card">
				<header class="stock-card__header">
					<div>
						<h2>{s.symbol}</h2>
						<strong>{s.price}$</strong>
						<span class="text-success">+{s.change} ({s.changePercent}%)</span><br />
						<small>({s.broker}:{s.symbol})</small>
					</div>
					<div class="pretty-image">
						<img
							aria-hidden="true"
							src={`https://storage.googleapis.com/iex/api/logos/${s.symbol}.png`}
							alt={s.symbol + ' Logo'}
						/>
						<img
							src={`https://storage.googleapis.com/iex/api/logos/${s.symbol}.png`}
							alt={s.symbol + ' Logo'}
						/>
					</div>
				</header>
				<figure class="stock-card__figure">
					<Stock />
					<figcaption><time><small>May 15, 14:10 EDT</small></time></figcaption>
				</figure>
				<div class="stock-card__details">
					<dl>
						<dt>Open</dt>
						<dd>{s.open.toFixed(2)}</dd>
						<dt>High</dt>
						<dd>{s.high.toFixed(2)}</dd>
						<dt>Low</dt>
						<dd>{s.low.toFixed(2)}</dd>
					</dl>
					<dl>
						<dt>52 week high</dt>
						<dd>{s.week52High.toFixed(2)}</dd>
						<dt>52 week low</dt>
						<dd>{s.week52Low.toFixed(2)}</dd>
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
</div>
<p class="resize-text">
	Resize me <ArrowTopRight />
</p>


<style global>
	.container {
		background: var(--base-800);
		border-radius: var(--radius);
		container: fake-window / size;
		inline-size: 600px;
		margin-inline: auto;
		min-inline-size: 12rem;
		max-inline-size: 80vw;
		block-size: 80vh;
		overflow: overlay;
		resize: both;
		border: 1px solid rgb(0 0 0 / 12%);
		position: relative;
	}

	.scroller {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	.stock-card {
		--template-areas: '🐶 📈' '🤑 🤑';
		--detail-template-columns: 1fr 1fr 1fr;
		--chart-aspect-ratio: 2 / 1;

		display: grid;
		grid-template-areas: var(--template-areas);
		grid-auto-columns: 1fr;
		gap: 1rem;
		border-radius: var(--radius);
		padding: 1rem;
		flex: 0 0 auto;
		background: var(--base-100);
	}

	.stock-card svg {
		width: 100%;
		height: auto;
		aspect-ratio: var(--chart-aspect-ratio);
		color: var(--primary);
		background: linear-gradient(45deg, hsl(var(--secondary-hsl) / 10%), var(--base-100));
		border-radius: calc(var(--radius) - 0.5rem);
		box-shadow: var(--shadow-elevation-medium);
		padding: 1rem;
	}

	.stock-card svg path {
		stroke: currentColor;
	}
	.stock-card svg circle {
		fill: currentColor;
	}

	.stock-card__details {
		display: grid;
		grid-template-columns: var(--detail-template-columns);
		gap: 0.5rem 2rem;
		align-items: start;
		grid-area: 🤑;
		max-inline-size: 800px;
	}

	.stock-card__figure {
		grid-area: 📈;
		margin-block: 0;
		margin-inline: 0;
	}

	.stock-card__header {
		grid-area: 🐶;
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	.stock-card small {
		color: var(--text-color-100);
		font-size: 0.75em;
		font-weight: normal;
	}

	.stock-card img {
		aspect-ratio: 1 / 1;
		inline-size: 64px;
		border-radius: calc(var(--radius) - 0.5rem);
	}

	.stock-card h2 {
		font-size: clamp(1rem, 0.5rem + 5cqi, 3rem);
	}

	@container (max-width: 600px) {
		.stock-card {
			--template-areas: '🐶' '📈' '🤑';
			--detail-template-columns: 1fr 1fr;
			--chart-aspect-ratio: 3 / 1;
		}
	}

	@container (max-width: 440px) {
		.scroller {
			flex-direction: row;
			align-items: start;
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
			overflow: auto;
		}

		.stock-card {
			--template-areas: '🐶' '🤑';
			--detail-template-columns: 1fr;
			min-inline-size: calc(100cqi - 2rem);
			scroll-snap-align: center;
		}

		.stock-card__header {
			flex-direction: row-reverse;
			justify-content: start;
		}

		.stock-card__figure {
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
		background: white;
	}

	.resize-text {
		margin-inline-end: 0.25rem;;
		margin-block-start: 0.5rem;;
		display: flex;
		justify-content: end;
	}

	.resize-text svg {
		width: 1.5em;
		height: 1.5em;
	}
</style>
