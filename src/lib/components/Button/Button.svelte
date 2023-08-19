<script lang="ts">
	export let as: 'button' | 'a' = 'button';
	export let href = '';
	export let color: 'black' | 'blue' | 'default' = 'default';
	const onClick =
		as === 'button'
			? () => {
					window.location.href = href;
			  }
			: undefined;
</script>

<svelte:element
	this={as}
	{...$$props}
	{href}
	class={`root ${$$props.class || ''} ${color}`}
	on:click={onClick}
	role="button"
	tabindex={0}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use '$styles/mixins' as m;
	.root {
		@include m.rounded-sm;
		color: var(--color-text-contrast);
		font-weight: 500;
		font-size: 1.2rem;
		width: fit-content;
		position: relative;
		padding: 12px 20px;
		transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
		overflow: hidden;
		border: none;
		cursor: pointer;
	}

	.root.default {
		@include m.linear-gradient-silver;
	}

	.root.blue {
		@include m.linear-gradient-blue;
	}

	.root.black {
		@include m.linear-gradient-black-dark;
	}

	.root::after {
		content: '›';
		margin-left: 10px;
		position: relative;
		bottom: 1px;
		left: 0;
		display: inline-block;
		transform: translateX(-2px) scale(1.4);
		transition: transform 0.4s ease-in-out;
	}

	.root.default::before {
		content: '';
		@include m.linear-gradient-black;
		z-index: -1;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transition: clip-path 0.2s linear;
		clip-path: circle(0% at 50% 100%);
	}

	.root:hover,
	.root:focus {
		outline: none;
		color: var(--color-text-contrast);
		transform: translateX(0);
	}

	.root:hover::after,
	.root:focus::after {
		animation: swing 0.3s ease-in-out infinite alternate;
	}

	.root.default:hover::before,
	.root.default:focus::before {
		clip-path: circle(100% at 50% 50%);
	}

	@keyframes swing {
		from {
			transform: translateX(-2px) scale(1.4);
		}
		to {
			transform: translateX(4px) scale(1.4);
		}
	}
</style>
