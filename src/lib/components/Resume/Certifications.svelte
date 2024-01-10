<script lang="ts">
	import type { ResumeExperienceBlok } from '$lib/storyblok/types';
	import Typography from '../Typography/Typography.svelte';
	export let certifications: ResumeExperienceBlok[] = [];
</script>

<Typography variant="h3">Certificates & courses</Typography>
<ul>
	{#each certifications as certification}
		<a href={certification?.link?.cached_url || ''} target="_blank">
			<li class="certification">
				<Typography noMargin color="light" size="xs">{certification.timestamp}</Typography>
				<Typography noMargin color="light" size="xs" weight="600">{certification.title}</Typography>
				<Typography noMargin color="light" size="xs">{certification.company}</Typography>
			</li>
		</a>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/mixins' as m;

	a:hover {
		text-decoration: none;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-wrap: wrap;
		width: 100%;
	}

	.certification {
		background-image: linear-gradient(160deg, #020202, #303030);
		@include m.rounded-sm;
		padding: 2rem 1.4rem;
		flex: 1 0 40%;
		margin: 0;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: 4px;
		position: relative;
		overflow: hidden;
		z-index: 1;
		&:hover::after {
			opacity: 0.4;
		}
		&::after {
			transition: opacity 0.2s ease-in-out;
			content: '';
			position: absolute;
			left: 1rem;
			top: -4rem;
			opacity: 0.15;
			z-index: -1;
			filter: grayscale(1);
			background-image: url('$lib/assets/images/achievement.png');
			background-size: cover;
			width: 250px;
			height: 250px;
		}
	}
</style>
