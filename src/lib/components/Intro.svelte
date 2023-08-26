<script>
	import Container from './Container/Container.svelte';
	import Counter from './Counter/Counter.svelte';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<Container maxWidth={800}>
	<IntersectionObserver let:isIntersecting once>
		<div class="text-wrapper">
			<Typography weight="300" size="xxl" color="contrast">
				With over
				<Counter play={isIntersecting} count={8} />
				years in the industry,
				<br />I've got you covered.
			</Typography>
		</div>
	</IntersectionObserver>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;

	.text-wrapper {
		padding-top: 8rem;
		padding-bottom: 8rem;
		text-align: center;
	}
	@include m.md {
	}
</style>
