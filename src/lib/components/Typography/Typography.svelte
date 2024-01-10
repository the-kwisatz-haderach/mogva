<script lang="ts">
	import type { Color, Size, Variant, Weight } from './types';

	const colorMap: Record<Color, string> = {
		regular: 'var(--color-text-primary)',
		contrast: 'var(--color-text-contrast)',
		subtle: 'var(--color-text-subtle)',
		light: 'var(--color-silver-light)',
		dark: 'var(--color-black)'
	};
	const defaultSize: Record<Variant, Size> = {
		h1: 'xxxl',
		h2: 'xxl',
		h3: 'xl',
		h4: 'lg',
		h5: 'md',
		h6: 'sm',
		p: 'md',
		span: 'md',
		div: 'md'
	};

	export let variant: Variant = 'p';
	export let color: Color = 'regular';
	export let size: Size = defaultSize[variant];
	export let styled: 'default' | 'ingress' = 'default';
	export let weight: Weight | undefined = undefined;
	export let noMargin = false;
	export let narrow = false;
</script>

<svelte:element
	this={variant}
	class="{size} {$$props.class} {styled}"
	class:noMargin
	class:narrow
	style:color={colorMap[color]}
	style:font-weight={weight}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use '$styles/mixins' as m;

	.narrow {
		max-width: 800px;
		margin: auto;
	}
	p:not(:last-of-type, .noMargin) {
		margin-bottom: 1rem;
	}
	p.xs,
	p.sm {
		line-height: 1.5;
	}

	.ingress {
		text-transform: uppercase;
		opacity: 0.4;
		letter-spacing: 2px;
	}

	.xs {
		font-size: 0.8rem;
	}
	.sm {
		font-size: 0.9rem;
	}
	.md {
		font-size: 1rem;
	}
	.lg {
		font-size: 1.2rem;
	}
	.xl {
		font-size: 1.4rem;
		line-height: 1.4;
	}
	.xxl {
		font-size: 1.6rem;
		line-height: 1.4;
	}
	.xxxl {
		font-size: 1.8rem;
		line-height: 1.2;
	}

	.noMargin {
		margin: 0;
	}

	@include m.md {
		.xs {
			font-size: 0.8rem;
		}
		.sm {
			font-size: 0.9rem;
		}
		.md {
			font-size: 1rem;
		}
		.lg {
			font-size: 1.1rem;
		}
		.xl {
			font-size: 1.4rem;
		}
		.xxl {
			font-size: 1.8rem;
		}
		.xxxl {
			font-size: 2rem;
		}
	}
	@include m.lg {
		.xs {
			font-size: 0.8rem;
		}
		.sm {
			font-size: 0.9rem;
		}
		.md {
			font-size: 1rem;
		}
		.lg {
			font-size: 1.2rem;
		}
		.xl {
			font-size: 1.5rem;
		}
		.xxl {
			font-size: 2rem;
		}
		.xxxl {
			font-size: 3rem;
		}
	}
	@include m.xl {
		.xs {
			font-size: 0.8rem;
		}
		.sm {
			font-size: 0.9rem;
		}
		.md {
			font-size: 1rem;
		}
		.lg {
			font-size: 1.6rem;
		}
		.xl {
			font-size: 2rem;
		}
		.xxl {
			font-size: 2.5rem;
		}
		.xxxl {
			font-size: 3.5rem;
		}
	}
</style>
