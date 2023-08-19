<script>
	import { fly } from 'svelte/transition';
	import Tag from './Tag.svelte';
	import Typography from './Typography/Typography.svelte';
	import { experienceTags } from './Resume/experiences';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Button from './Button/Button.svelte';
	import Container from './Container/Container.svelte';

	const skills = [...experienceTags.keys()];
</script>

<Container style="margin-top: -8rem;">
	<div class="content-wrapper">
		<Typography variant="h2">Toolset</Typography>
		<IntersectionObserver let:isIntersecting once>
			<Typography>
				With more than 8 years in the industry, I've picked up a wide range of skills to leverage in
				the different stages of development. Be it designing, developing, testing, deploying or
				analysing & optimising software.
			</Typography>
			<ul>
				{#each skills as skill, i (skill)}
					{#if isIntersecting}
						<li
							in:fly|global={{
								y: 200,
								x: (i % 2 === 0 ? 1 : -1) * 400,
								duration: 300,
								delay: 2000 + i * 100
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
		<Button href="/resume" color="black">View full resume</Button>
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	ul {
		display: inline-flex;
		gap: 8px 4px;
		margin-top: 2rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	li {
		margin-bottom: 0;
	}

	.content-wrapper {
		position: relative;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
