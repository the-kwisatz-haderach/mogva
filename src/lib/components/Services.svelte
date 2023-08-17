<script>
	import Typography from './Typography/Typography.svelte';
</script>

<section class="contained">
	<Typography variant="h2">Services</Typography>
	<Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, possimus?</Typography>
	<div class="flex">
		<div>1</div>
		<div>2</div>
		<div>3</div>
	</div>
</section>

<style lang="scss">
	section {
		padding: 3rem;
	}

	.flex {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
	}
</style>
