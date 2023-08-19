<script lang="ts">
	type Size = 'sm' | 'md' | 'lg';
	type Color = 'default' | 'contrast';

	export let size: Size = 'md';
	export let color: Color = 'default';
</script>

<p {...$$props} class={`tag ${size} ${color}`}><slot /></p>

<style lang="scss">
	@use '$styles/mixins' as m;
	.tag {
		@include m.rounded-lg;
		padding: 2px 8px;
		height: fit-content;
		width: fit-content;
		&.default {
			background-color: var(--color-bg-secondary);
			color: var(--color-text-primary);
		}
		&.contrast {
			background-color: var(--color-bg-primary-dark);
			color: var(--color-text-contrast);
			border: 1px solid rgba(255, 255, 255, 0.2);
		}
		&.sm {
			padding: 2px 8px;
			font-size: 0.8rem;
		}
		&.md {
			padding: 5px 14px;
			font-size: 1rem;
		}
		&.lg {
			padding: 0.5rem 1rem;
			font-size: 1.4rem;
		}
	}
</style>
