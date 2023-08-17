<script>
	import { fly } from 'svelte/transition';
	import Tag from './Tag.svelte';
	import Typography from './Typography/Typography.svelte';
	import { experienceTags } from './Resume/experiences';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Button from './Button/Button.svelte';

	const skills = [...experienceTags.keys()];
</script>

<section class="contained">
	<Typography variant="h2" size="xxl">Skills & Experience</Typography>
	<div class="section">
		<IntersectionObserver let:isIntersecting once>
			<Typography size="lg"
				>With more than 8 years in the industry, I know a thing or two about...</Typography
			>
			<ul>
				{#each skills as skill, i (skill)}
					{#if isIntersecting}
						<li
							in:fly|global={{
								y: 200,
								x: (i % 2 === 0 ? 1 : -1) * 400,
								duration: 500,
								delay: 1000 + i * 200
							}}
						>
							<Tag color="contrast">{skill}</Tag>
						</li>
					{:else}
						<li style:visibility="hidden">
							<Tag color="contrast">{skill}</Tag>
						</li>
					{/if}
				{/each}
			</ul>
		</IntersectionObserver>
	</div>
	<Button href="/resume">View resume</Button>
</section>

<style lang="scss">
	@use '$styles/mixins' as m;

	ul {
		display: inline-flex;
		gap: 8px 4px;
		margin-top: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		margin-bottom: 0;
	}

	section {
		padding: 2rem 4rem;
		text-align: center;
		overflow: hidden;
		position: relative;
	}

	.section {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
		& > div:first-of-type {
			flex: 1;
		}
	}
</style>
