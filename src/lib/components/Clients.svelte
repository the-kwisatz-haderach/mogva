<script>
	import qlikLogo from '$lib/assets/images/qlik_logo.png';
	import ikeaLogo from '$lib/assets/images/ikea_logo.png';
	import heliospectraLogo from '$lib/assets/images/heliospectra_logo.webp';
	import electroluxLogo from '$lib/assets/images/electrolux_logo.png';
	import attendoLogo from '$lib/assets/images/attendo_logo.jpeg';
	import systeconLogo from '$lib/assets/images/systecon_logo.png';

	const images = [ikeaLogo, qlikLogo, heliospectraLogo, systeconLogo, electroluxLogo, attendoLogo];
</script>

<div>
	<h2>Clients</h2>
	<ul>
		{#each images as image}
			<li>
				<img src={image} alt="" />
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		padding-top: 5rem;
		padding-bottom: 5rem;
		background-color: var(--color-bg-secondary);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	li {
		flex-basis: 20%;
		height: 3rem;
		max-height: 60px;
		filter: grayscale(1);
	}

	li > img {
		width: inherit;
		height: inherit;
		object-fit: contain;
	}
</style>
