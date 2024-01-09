<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
	import Tag from '../Tag.svelte';
	import Typography from '../Typography/Typography.svelte';
	import type { ResumeExperienceBlok } from '$lib/storyblok/types';
	export let blok: ResumeExperienceBlok;
	let text = renderRichText(blok.text);
</script>

<div class="container">
	<div class="header-wrapper">
		<div class="experience-header">
			<div class="flex">
				<img src={blok.logo.filename} alt={blok.logo.alt} />
				<Typography weight="500">{blok.title}</Typography>
			</div>
			<Typography size="xs">
				<time datetime={blok.timestamp}>{blok.timestamp}</time>
			</Typography>
		</div>
		<Typography color="subtle" size="sm">{blok.company}</Typography>
	</div>
	<Typography variant="div" size="sm" class="rich-text">{@html text}</Typography>
	<ul class="tag-list">
		{#each blok.tags as tag}
			<Tag size="sm">{tag}</Tag>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.container {
		width: 100%;
	}

	:global(.rich-text p:not(:last-child)) {
		margin-bottom: 0.5rem;
	}

	:global(.rich-text ul) {
		margin-top: 1rem;
		padding-left: 2rem;
	}

	:global(.rich-text ul > li) {
		list-style: none;
		position: relative;
		&::before {
			content: '✦';
			position: absolute;
			top: 0;
			left: -1.4rem;
		}
		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	time {
		text-transform: capitalize;
	}
	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 1rem;
	}
	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 6px;
	}

	img {
		height: 20px;
	}

	.header-wrapper {
		margin-bottom: 1rem;
		width: 100%;
	}

	.experience-header {
		width: 100%;
		flex-wrap: wrap;
		display: flex;
		margin-bottom: 4px;
		justify-content: space-between;
	}

	@include m.sm {
		.experience-header {
			margin-bottom: 0;
		}
	}
</style>
