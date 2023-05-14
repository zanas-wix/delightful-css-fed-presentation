<script>
	import imageUrl from '../../lib/images/stock.svg';
</script>

Container queries

<div class="container">
	<div class="stock-stats">
		<img src={imageUrl} alt="Wix stock price chart" />
	</div>
</div>

<style>
	.container {
		resize: both;
		overflow: scroll;
		scrollbar-gutter: 0;
		inline-size: 600px;
		max-inline-size: 60vw;
		margin-inline: auto;
		background: var(--base-200);
		padding: 2rem;
		border-radius: var(--radius);
	}

	.container::-webkit-scrollbar {
		width: 1rem;
	}

	.container::-webkit-resizer {
		width: 1rem;
		height: 1rem;
		border-radius: 1rem;
		background: var(--primary);
		background-image: none;
	}

	.stock-stats {
		background: var(--base-100);
	}
</style>
