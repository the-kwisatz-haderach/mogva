<script lang="ts">
	export let color: 'default' | 'black' | 'subtle' | 'black-dark' | 'silver' = 'default';
	export let maxWidth = 1200;
</script>

<div {...$$props} class={`wrapper ${color} ${$$props.class || ''}`}>
	<div style:margin="auto" style:max-width={`${maxWidth}px`}>
		<slot />
	</div>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.wrapper {
		padding-left: calc(70px + 4rem);
		padding-right: calc(70px + 4rem);
		padding-top: 8rem;
		padding-bottom: 7rem;
		&.silver {
			@include m.linear-gradient-silver-reverse;
		}
		&.black {
			background-color: var(--color-bg-primary);
		}
		&.black-dark {
			background-color: var(--color-bg-primary-dark);
			border-top: 1px solid rgba(255, 255, 255, 0.2);
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}
		&.subtle {
			background-color: var(--color-bg-subtle);
		}
	}
</style>
