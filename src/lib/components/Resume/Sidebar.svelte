<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
	import Certifications from './Certifications.svelte';
	import { skills } from './skills';
</script>

<section>
	<Typography variant="h3">Top skills</Typography>
	<ul class="skills">
		{#each skills as skill}
			<li class="tag"><Typography size="xs">{skill}</Typography></li>
		{/each}
	</ul>
</section>
<section>
	<Typography variant="h3">Languages</Typography>
	<ul>
		<li>
			<Typography>Swedish</Typography>
			<Typography size="xs" color="subtle">Native or bilingual proficiency</Typography>
		</li>
		<li>
			<Typography>English</Typography>
			<Typography size="xs" color="subtle">Full professional proficiency</Typography>
		</li>
		<li>
			<Typography>Croatian</Typography>
			<Typography size="xs" color="subtle">Elementary proficiency</Typography>
		</li>
		<li>
			<Typography>Spanish</Typography>
			<Typography size="xs" color="subtle">Elementary proficiency</Typography>
		</li>
	</ul>
</section>
<section>
	<Typography variant="h3">Personal</Typography>
	<Typography size="sm"
		>When I'm off the clock I'm either playing guitar, reading science fiction, hunting down
		something for my vinyl collection or working on some personal project. Personality-wise I am
		easy going, stubborn, positive and social.</Typography
	>
</section>
<section>
	<Certifications />
</section>

<style lang="scss">
	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0px 6px;
	}

	.tag {
		background-color: var(--color-bg-secondary);
		padding: 2px 8px;
		border-radius: 1rem;
		height: fit-content;
	}
</style>
