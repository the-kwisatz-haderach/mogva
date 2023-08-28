<script lang="ts">
	import { fly } from 'svelte/transition';

	export let play = true;
	export let count = 0;
	export let intervalMs = 130;
	let current = 0;

	let timeout: NodeJS.Timeout;
	$: if (play && current < count) {
		timeout = setTimeout(() => {
			if (current === count) {
				clearTimeout(timeout);
			} else {
				intervalMs += 30;
				current++;
			}
		}, intervalMs);
	}
</script>

{#key current}
	<span {...$$props} class:play in:fly={{ y: 50, duration: intervalMs }}>{current}</span>
{/key}

<style lang="scss">
	@use '$styles/mixins' as m;
	:not(.play) {
		visibility: hidden;
	}
	span {
		background-color: var(--color-primary-light);
		font-weight: 900;
		padding-left: 4px;
		padding-right: 4px;
		width: 50px;
		font-size: 200%;
		line-height: 0;
		display: inline-block;
	}

	@include m.sm {
		span {
			width: 50px;
		}
	}
	@include m.md {
		span {
			width: 50px;
		}
	}
	@include m.lg {
		span {
			width: 50px;
		}
	}
	@include m.xl {
		span {
			width: 60px;
		}
	}
</style>
