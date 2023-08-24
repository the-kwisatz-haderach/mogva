<script lang="ts">
	export let href = '';
	export let external = false;
</script>

<a {href} target={external ? '_blank' : undefined}>
	<slot />
</a>

<style lang="scss">
	@use '$styles/mixins' as m;
	a {
		position: relative;
		font-weight: 500;
		font-size: 0.9rem;
		color: var(--color-text-contrast);
		&::before {
			content: '';
			width: 100%;
			position: absolute;
			transform: scaleX(0);
			height: 1px;
			left: 0;
			bottom: -2px;
			background-color: var(--color-text-contrast);
			transition: transform 0.3s ease-in-out;
			transform-origin: left;
		}
		&:hover::before {
			transform: scaleX(1);
		}
	}
	@include m.md {
		a {
			font-size: 1rem;
		}
	}
</style>
