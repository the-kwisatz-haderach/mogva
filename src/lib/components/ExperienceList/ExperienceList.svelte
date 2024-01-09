<script lang="ts">
	import type { ResumeExperienceBlok } from '$lib/storyblok/types';
	import ResumeExperience from './ResumeExperience.svelte';
	export let bloks: ResumeExperienceBlok[] = [];
</script>

<ul>
	{#each bloks as experienceBlok}
		<li>
			<ResumeExperience blok={experienceBlok} />
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/mixins' as m;

	ul > li:not(:last-child) {
		margin-bottom: 1rem;
	}

	li {
		position: relative;
		display: flex;
		gap: 1.5rem;
		padding-bottom: 2rem;
		margin-bottom: 0;
	}

	@include m.md {
		li {
			padding-right: 1.5rem;
			position: relative;
			display: flex;
			gap: 1.5rem;
			padding-bottom: 2rem;
			margin-bottom: 0;
			$color-timeline: rgb(212, 212, 212);
			&:not(:last-child)::before {
				content: '';
				position: absolute;
				top: 3px;
				right: 0px;
				width: 1px;
				height: calc(100% + 1rem);
				background-color: $color-timeline;
			}
			&::after {
				content: '';
				position: absolute;
				top: 3px;
				right: -5px;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: $color-timeline;
			}
		}
	}
</style>
