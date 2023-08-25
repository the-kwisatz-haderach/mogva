<script lang="ts">
	export let color: 'default' | 'black' | 'subtle' | 'black-dark' | 'silver' = 'default';
	export let maxWidth = 1200;
	export let padded = true;
</script>

<div {...$$props} class={`wrapper ${color} ${$$props.class || ''}`} class:padded>
	<div style:margin="auto" style:max-width={`${maxWidth}px`}>
		<slot />
	</div>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.padded {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 5rem;
		padding-bottom: 6rem;
	}
	.wrapper {
		overflow: hidden;
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

	@include m.sm {
		.padded {
			padding-left: 3rem;
			padding-right: 3rem;
			padding-top: 6rem;
			padding-bottom: 7rem;
		}
	}
	@include m.md {
		.padded {
			padding-left: 5rem;
			padding-right: 5rem;
			padding-top: 8rem;
			padding-bottom: 9rem;
		}
	}

	@include m.lg {
		.padded {
			padding-left: calc(70px + 4rem);
			padding-right: calc(70px + 4rem);
			padding-top: 9rem;
			padding-bottom: 8rem;
		}
	}
</style>
