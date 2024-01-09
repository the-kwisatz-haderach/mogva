<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
	import type { ResumeExperienceBlok } from '$lib/storyblok/types';
	import { renderRichText } from '@storyblok/svelte';
	export let blok: ResumeExperienceBlok;
	let text = renderRichText(blok.text);
</script>

<Typography noMargin size="sm" weight="500">{blok.title}</Typography>
<div class="flex">
	<img src={blok.logo.filename} alt={blok.logo.alt} />
	<div class="sub">
		<Typography size="xs" color="subtle" noMargin>
			{blok.company}
		</Typography>
		<Typography size="xs">{blok.timestamp}</Typography>
	</div>
</div>
<Typography size="xs">{@html text}</Typography>

<style lang="scss">
	img {
		height: 35px;
	}

	.sub {
		display: flex;
		flex-direction: column;
	}

	.flex {
		display: flex;
		align-items: center;
		gap: 12px;
	}
</style>
