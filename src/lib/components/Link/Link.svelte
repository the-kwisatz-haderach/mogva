<script lang="ts">
	import ExternalLink from '$lib/assets/icons/ExternalLink.svelte';

	export let href = '';
	export let external = false;
	export let invertHover = false;
	export let light = false;
</script>

<a {href} target={external ? '_blank' : undefined} class:invertHover class:light>
	{#if external}<ExternalLink class="external" />{/if}
	<slot />
</a>

<style lang="scss">
	@use '$styles/mixins' as m;
	:global(.external) {
		width: 1rem;
		height: 1rem;
		position: relative;
		top: 1px;
		margin-right: 4px;
		fill: white;
		display: inline;
	}
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
			transform-origin: right;
		}
		&:hover::before {
			transform: scaleX(1);
		}
	}

	a.light {
		color: var(--color-silver-light);
		&::before {
			background-color: var(--color-silver-light);
		}
	}

	a.invertHover {
		&:hover::before {
			transform: scaleX(0);
		}
		&::before {
			transform: scaleX(1);
		}
	}

	@include m.md {
		a {
			font-size: 1rem;
		}
	}

	@media print {
		a {
			font-size: 0.9rem;
		}
	}
</style>
