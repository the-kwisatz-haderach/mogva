<script>
	import Typography from './Typography/Typography.svelte';
</script>

<div class="wrapper">
	<div class="container">
		<Typography variant="h2">About</Typography>
		<Typography
			>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit nostrum deserunt
			sequi cupiditate. Doloremque illo officia minus doloribus facilis.</Typography
		>
	</div>
	<div class="angle" />
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.container {
		@include m.shadow-md;
		@include m.linear-gradient-silver-reverse;
		@include m.rounded-md;
		margin: auto;
		padding: 4rem;
		max-width: 1200px;
		min-height: 400px;
	}
	.wrapper {
		position: relative;
		padding: 2rem 4rem;
		z-index: 1;
		margin-bottom: 3rem;
	}

	.angle {
		z-index: -1;
		position: absolute;
		top: 10%;
		right: 0;
		bottom: -12%;
		left: 0;
		overflow: hidden;
		&::before {
			content: '';
			top: 10%;
			left: -10%;
			width: 120%;
			height: 100%;
			position: absolute;
			background-color: var(--color-bg-paper);
			transform: rotate(-3deg);
		}
	}
</style>
