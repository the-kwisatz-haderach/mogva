<script>
	import Typography from './Typography/Typography.svelte';
</script>

<div>
	<Typography variant="h2">Get in touch</Typography>
	<p>Drop me a line on LinkedIn, or send me an email.</p>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	div {
		@include m.linear-gradient-black-reverse;
		height: 360px;
		background-color: var(--color-bg-subtle);
	}
</style>
