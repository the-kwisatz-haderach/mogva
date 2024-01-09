import { PUBLIC_STORYBLOK_PREVIEW_TOKEN, PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';
import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';
import Resume from '$lib/components/Resume/index.svelte';
import ResumeExperienceBlok from '$lib/components/ExperienceList/ResumeExperience.svelte';
import PageBlok from '$lib/components/LandingPage/LandingPage.svelte';
import Hero from '$lib/components/Hero.svelte';
import { dev } from '$app/environment';
import LandingPage from '$lib/components/LandingPage/LandingPage.svelte';

export async function load() {
	storyblokInit({
		accessToken: dev ? PUBLIC_STORYBLOK_PREVIEW_TOKEN : PUBLIC_STORYBLOK_TOKEN,
		use: [apiPlugin],
		apiOptions: {
			https: true
		},
		components: {
			page: PageBlok,
			resume: Resume,
			hero: Hero,
			landing_page: LandingPage,
			resume_experience: ResumeExperienceBlok
		}
	});
	const storyblokApi = await useStoryblokApi();
	return {
		storyblokApi
	};
}
