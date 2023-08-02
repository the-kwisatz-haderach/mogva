<script>
	import Typography from '../Typography/Typography.svelte';
	import { certifications } from './certifications';
</script>

<Typography variant="h3">Certificates & Courses</Typography>
<ul>
	{#each certifications as certification}
		<li class="certification">
			<Typography color="contrast" size="xs">{certification.timestamp}</Typography>
			<Typography color="contrast" size="xs" weight="600">{certification.name}</Typography>
			<Typography color="contrast" size="xs">{certification.institute}</Typography>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/mixins' as m;

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex-wrap: wrap;
		width: 100%;
	}

	.certification {
		@include m.linear-gradient-black;
		padding: 2rem 1.4rem;
		flex: 1 0 40%;
		margin: 0;
		height: fit-content;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		position: relative;
		overflow: hidden;
		z-index: 1;
		&::after {
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
