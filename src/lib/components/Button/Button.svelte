<script lang="ts">
	export let as: 'button' | 'a' = 'button';
	export let href = '';

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
	class={`root ${$$props.class || ''}`}
	on:click={onClick}
	role="button"
	tabindex={0}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use '$styles/mixins' as m;
	.root {
		color: var(--color-text-contrast);
		@include m.linear-gradient-silver;
		font-weight: 500;
		font-size: 1.2rem;
		border-radius: 4px;
		width: fit-content;
		position: relative;
		padding: 12px 20px;
		transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
		overflow: hidden;
		border: none;
		cursor: pointer;
	}

	.root::after {
		content: '›';
		margin-left: 10px;
		position: relative;
		bottom: 1px;
		display: inline-block;
		transform: translateX(0) scale(1.4);
	}

	.root::before {
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
		animation: swing 0.4s ease-in-out infinite forwards alternate-reverse;
	}

	.root:hover::before,
	.root:focus::before {
		clip-path: circle(100% at 50% 50%);
	}

	@keyframes swing {
		from {
			transform: translateX(-1px) scale(1.4);
		}
		to {
			transform: translateX(4px) scale(1.4);
		}
	}
</style>
