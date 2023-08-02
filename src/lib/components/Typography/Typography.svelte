<script lang="ts">
	type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	type Color = 'regular' | 'contrast' | 'subtle';
	type Weight = '100' | '200' | '300' | '400' | '500' | '600' | '700';
	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

	const colorMap: Record<Color, string> = {
		regular: 'var(--color-text-primary)',
		contrast: 'var(--color-text-contrast)',
		subtle: 'var(--color-text-subtle)'
	};
	const defaultSize: Record<Variant, Size> = {
		h1: 'xxl',
		h2: 'xl',
		h3: 'lg',
		h4: 'md',
		h5: 'md',
		h6: 'sm',
		p: 'md'
	};

	export let variant: Variant = 'p';
	export let color: Color = 'regular';
	export let size: Size = defaultSize[variant];
	export let weight: Weight | undefined = undefined;
</script>

<svelte:element
	this={variant}
	class="{size} {$$props.class}"
	style:color={colorMap[color]}
	style:font-weight={weight}
>
	<slot />
</svelte:element>

<style lang="scss">
	p.xs,
	p.sm {
		line-height: 1.5;
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
		font-size: 1.5rem;
	}
	.xxl {
		font-size: 2rem;
	}
	.xxxl {
		font-size: 3rem;
	}
</style>
