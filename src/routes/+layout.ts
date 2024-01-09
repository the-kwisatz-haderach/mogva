import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';
import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';
import Resume from '$lib/components/Resume/index.svelte';

export async function load() {
	storyblokInit({
		accessToken: PUBLIC_STORYBLOK_TOKEN,
		use: [apiPlugin],
		apiOptions: {
			https: true
		},
		components: {
			resume: Resume
		}
	});
	const storyblokApi = await useStoryblokApi();
	return {
		storyblokApi
	};
}
