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

<Container>
	<div class="content-wrapper">
		<div>
			<Typography variant="h2" color="contrast">Toolset</Typography>
			<Typography narrow color="contrast">
				With more than 8 years in the industry, I've picked up a wide range of skills to leverage in
				the different stages of development. Be it designing, developing, testing, deploying or
				analysing & optimising software.
			</Typography>
		</div>
		<IntersectionObserver let:isIntersecting once>
			<ul>
				{#each skills as skill, i (skill)}
					{#if isIntersecting}
						<li
							style:visibility={isIntersecting ? 'initial' : 'hidden'}
							in:fly|global={{
								y: 200,
								x: (i % 2 === 0 ? 1 : -1) * 400,
								duration: 500,
								delay: 2000 + i * 100
							}}
						>
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
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
		display: inline-flex;
		gap: 8px 4px;
		margin-top: 2rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		max-height: 260px;
		overflow: hidden;
		justify-content: center;
	}

	li {
		margin-bottom: 0;
	}

	.content-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@include m.md {
		ul {
			max-height: unset;
			overflow: unset;
		}
		.content-wrapper {
			text-align: center;
		}
	}
</style>
