<script>
	import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

{#if data.story}
	<StoryblokComponent blok={data.story.content} />
{/if}
