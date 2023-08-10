<script lang="ts">
	import { onMount } from 'svelte';

	export let once = false;
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;
	export let threshold: number[] = [];

	let container: Element;
	let isIntersecting = false;

	onMount(() => {
		const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

		const observer = new IntersectionObserver(
			(entries) => {
				isIntersecting = entries[0].isIntersecting;
				if (isIntersecting && once) {
					observer.unobserve(container);
				}
			},
			{
				rootMargin,
				threshold
			}
		);

		observer.observe(container);
		return () => {
			observer.unobserve(container);
		};
	});
</script>

<div bind:this={container} {...$$props}>
	<slot {isIntersecting} />
</div>
