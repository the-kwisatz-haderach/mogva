<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
	import Certifications from './Certifications.svelte';
	import { educations } from './educations';
	import { skills } from './skills';
</script>

<aside>
	<section class="education-section">
		<Typography variant="h3">Education</Typography>
		<ul class="education-list">
			{#each educations as education}
				<li>
					<Typography size="sm" weight="500">{education.title}</Typography>
					<div class="flex">
						<img src={education.imgSrc} alt={education.subtitle} />
						<div>
							<Typography size="xs" color="subtle">
								{education.subtitle}
							</Typography>
							<Typography size="xs">{education.timestamp}</Typography>
						</div>
					</div>
					{#each education.text as t}
						<Typography size="xs">{t}</Typography>
					{/each}
				</li>
			{/each}
		</ul>
	</section>
	<section class="certifications-section">
		<Certifications />
	</section>
	<section class="skills-section">
		<Typography variant="h3">Top skills</Typography>
		<ul class="skills">
			{#each skills as skill}
				<li class="tag"><Typography size="xs">{skill}</Typography></li>
			{/each}
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
		<Typography variant="h3">Languages</Typography>
		<ul class="language-list">
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
</aside>

<style lang="scss">
	aside {
		width: 240px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.education-list {
		display: flex;
		flex-direction: column;
		& > li {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
		& > li:not(:last-child) {
			margin-bottom: 1.5rem;
		}
	}
	.flex {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	img {
		height: 35px;
	}

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

	@media print {
		.language-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			& > li {
				flex: 1 0 40%;
			}
		}
		section {
			// max-width: 50%;
			flex: 1 1 40%;
		}
		.education-section {
			flex: 1 0 100%;
			flex-direction: row;
			flex-wrap: wrap;
		}

		.education-list {
			flex-direction: row;
			gap: 2rem;
			& > li {
				flex: 1 1 40%;
			}
		}

		.certifications-section {
			flex: 1 0 100%;
			order: 4;
		}

		.skills-section {
			order: 2;
		}

		aside {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
