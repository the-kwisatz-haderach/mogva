<script lang="ts">
	import Tag from '../Tag.svelte';
	import Typography from '../Typography/Typography.svelte';
	import Certifications from './Certifications.svelte';
	import { educations } from './educations';
	import { experienceTags } from './experiences';
</script>

<aside>
	<section class="skills-section">
		<Typography variant="h3">Key skills</Typography>
		<ul class="skills">
			{#each [...experienceTags.keys()].filter((tag) => experienceTags
					.get(tag)
					?.includes('highlight')) as skill}
				<li><Tag size="sm">{skill}</Tag></li>
			{/each}
		</ul>
	</section>
	<section class="education-section">
		<Typography variant="h3">Education</Typography>
		<ul class="education-list">
			{#each educations as education}
				<li>
					<Typography noMargin size="sm" weight="500">{education.title}</Typography>
					<div class="flex">
						<img src={education.imgSrc} alt={education.subtitle} />
						<div class="sub">
							<Typography size="xs" color="subtle" noMargin>
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
				<Typography noMargin weight="400">Swedish</Typography>
				<Typography size="xs" color="subtle">Native or bilingual proficiency</Typography>
			</li>
			<li>
				<Typography noMargin weight="400">English</Typography>
				<Typography size="xs" color="subtle">Full professional proficiency</Typography>
			</li>
			<li>
				<Typography noMargin weight="400">Croatian</Typography>
				<Typography size="xs" color="subtle">Elementary proficiency</Typography>
			</li>
			<li>
				<Typography noMargin weight="400">Spanish</Typography>
				<Typography size="xs" color="subtle">Elementary proficiency</Typography>
			</li>
		</ul>
	</section>
</aside>

<style lang="scss">
	@use '$styles/mixins' as m;
	aside {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.sub {
		display: flex;
		flex-direction: column;
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

	@include m.lg {
		aside {
			width: 240px;
		}
	}

	@media print {
		aside {
			display: flex;
			flex-direction: column;
		}
	}
</style>
