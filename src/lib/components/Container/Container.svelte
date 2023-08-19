<script lang="ts">
	export let color: 'default' | 'black' | 'subtle' | 'black-dark' = 'default';
	export let maxWidth = 1200;
</script>

<div {...$$props} class={`wrapper ${color} ${$$props.class || ''}`}>
	<div style:margin="auto" style:max-width={`${maxWidth}px`}>
		<slot />
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-left: calc(70px + 4rem);
		padding-right: calc(70px + 4rem);
		padding-top: 8rem;
		padding-bottom: 7rem;
		&.black {
			background-color: var(--color-bg-primary);
		}
		&.black-dark {
			background-color: var(--color-bg-primary-dark);
		}
		&.subtle {
			background-color: var(--color-bg-subtle);
		}
	}
</style>
