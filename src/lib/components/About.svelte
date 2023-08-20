<script>
	import Container from './Container/Container.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<Container id="about" color="black-dark" maxWidth={1000}>
	<div class="content-wrapper">
		<div class="text-wrapper">
			<Typography color="contrast" variant="h2">About</Typography>
			<Typography color="contrast"
				>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit nostrum deserunt
				sequi cupiditate. Doloremque illo officia minus doloribus facilis.</Typography
			>
			<Typography color="contrast">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in non cupiditate maxime
				debitis incidunt corporis animi, repudiandae quisquam, quae, laudantium placeat consectetur
				voluptas maiores!
			</Typography>
			<Typography color="contrast">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in non cupiditate maxime
				debitis incidunt corporis animi, repudiandae quisquam, quae, laudantium placeat.
			</Typography>
		</div>
		<div class="image-wrapper">
			<img src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png" alt="" />
		</div>
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: -7rem;
	}

	.image-wrapper {
		position: relative;
		bottom: -1rem;
		width: 320px;
		height: 400px;
	}

	.text-wrapper {
		flex: 1;
		padding-top: 1rem;
		position: relative;
		bottom: 1rem;
	}
</style>
