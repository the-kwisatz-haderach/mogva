<script>
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import Tag from './Tag.svelte';
	import Typography from './Typography/Typography.svelte';
	import { experienceTags } from './Resume/experiences';
	import IntersectionObserver from './IntersectionObserver/IntersectionObserver.svelte';
	import Button from './Button/Button.svelte';

	const skills = [...experienceTags.keys()];
	let currentIndex = 0;
	const timer = setInterval(() => {
		currentIndex++;
		if (currentIndex > skills.length - 1) {
			clearInterval(timer);
		}
	}, 1000);

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="wrapper">
	<section>
		<IntersectionObserver let:isIntersecting once>
			<Typography variant="h2" size="xxl">Skills & Experience</Typography>
			<div class="section">
				<div>
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
										delay: 1000 + Math.max(2000 - currentIndex * 500, 0) + 250 * i
									}}
								>
									<Tag color="contrast" size="lg">{skill}</Tag>
								</li>
							{:else}
								<li style:visibility="hidden">
									<Tag color="contrast" size="lg">{skill}</Tag>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
				<div>Second</div>
			</div>
			<Button href="/resume">View resume</Button>
		</IntersectionObserver>
	</section>
	<div class="angle" />
	<div class="angle bg-border" />
</div>

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

	.bg-border {
		z-index: -1;
		&::before {
			content: '';
			top: 0%;
			left: -10%;
			width: 120%;
			height: 80%;
			position: absolute;
			transform: rotate(-3deg);
		}
	}

	.angle {
		position: absolute;
		top: 10%;
		right: 0;
		pointer-events: none;
		bottom: -12%;
		left: 0;
		overflow: hidden;
	}

	.wrapper {
		position: relative;
		padding: 8rem 4rem;
		z-index: 1;
	}

	section {
		@include m.shadow-md;
		@include m.rounded-md;
		text-align: center;
		overflow: hidden;
		color: var(--color-text-contrast);
		z-index: 1;
		background-color: var(--color-bg-paper);
		padding: 6rem 6rem;
		max-width: 1200px;
		margin: auto;
	}

	.section {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		& > div:first-of-type {
			flex: 1;
		}
		& > div:last-of-type {
			max-width: 300px;
			flex: 1;
			border-left: 1px solid var(--color-bg-subtle);
		}
	}
</style>
