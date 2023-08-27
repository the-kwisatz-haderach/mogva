<script>
	import Container from './Container/Container.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<Container id="about" color="black-dark" maxWidth={1000}>
	<div class="content-wrapper">
		<div class="text-wrapper">
			<Typography color="contrast" variant="h2">About me</Typography>
			<Typography color="contrast"
				>My path to becoming a developer has been anything but straight. Having spent the first five
				years of my career managing digital projects, an Indian subsidiary office in Mumbai, and
				finally a team of digital analysts, I jumped on the opportunity to follow a growing dream of
				specialising in software development.</Typography
			>
			<Typography color="contrast"
				>In most other industries this kind of transition is probably nowhere near as painless but
				in IT all you really need is your passion and a dedication to learning.</Typography
			>
			<Typography color="contrast"
				>As a learning-oriented person, this is an environment I thrive in. My main driving force is
				the feeling of overcoming challenges and doing so with like minded people.</Typography
			>
		</div>
		<!-- <div class="image-wrapper">
			<img
				width="100%"
				height="100%"
				src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png"
				alt=""
			/>
		</div> -->
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		// margin-bottom: -5rem;
	}

	.image-wrapper {
		position: relative;
		bottom: -1rem;
		width: 192px;
		aspect-ratio: 240 / 192;
	}

	.text-wrapper {
		flex: 1;
	}

	@include m.md {
		.text-wrapper {
			padding-bottom: 7rem;
		}
		.image-wrapper {
			position: relative;
			bottom: -5rem;
			width: 33%;
		}
		.content-wrapper {
			gap: 2rem;
			justify-content: space-between;
			flex-direction: row;
			margin-bottom: -8rem;
		}
	}
</style>
