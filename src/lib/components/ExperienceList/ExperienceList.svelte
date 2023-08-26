<script lang="ts">
	import Tag from '../Tag.svelte';
	import Typography from '../Typography/Typography.svelte';
	import type { Item } from './types';
	export let items: Item[] = [];
</script>

<ul>
	{#each items as item}
		<li>
			<div>
				<div class="header-wrapper">
					<div class="experience-header">
						<div class="flex">
							<img src={item.imgSrc} alt={item.subtitle} />
							<Typography weight="500">{item.title}</Typography>
						</div>
						<Typography size="xs">
							<time datetime={item.timestamp}>{item.timestamp}</time>
						</Typography>
					</div>
					<Typography color="subtle" size="sm">{item.subtitle}</Typography>
				</div>
				{#each item.text as t}
					<Typography class="text" size="sm">{t}</Typography>
				{/each}
				<ul class="tag-list">
					{#each item.tags as tag}
						<Tag size="sm">{tag}</Tag>
					{/each}
				</ul>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '$styles/mixins' as m;
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

	ul > li:not(:last-child) {
		margin-bottom: 1rem;
	}

	li {
		position: relative;
		display: flex;
		gap: 1.5rem;
		padding-bottom: 2rem;
		margin-bottom: 0;
		& > div {
			width: 100%;
		}
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

	:global(.text:not(:last-child)) {
		margin-bottom: 0.5rem;
	}

	@include m.sm {
		.experience-header {
			margin-bottom: 0;
		}
	}

	@include m.md {
		li {
			padding-right: 1.5rem;
			position: relative;
			display: flex;
			gap: 1.5rem;
			padding-bottom: 2rem;
			margin-bottom: 0;
			& > div {
				width: 100%;
			}
			$color-timeline: rgb(212, 212, 212);
			&:not(:last-child)::before {
				content: '';
				position: absolute;
				top: 3px;
				right: 0px;
				width: 1px;
				height: calc(100% + 1rem);
				background-color: $color-timeline;
			}
			&::after {
				content: '';
				position: absolute;
				top: 3px;
				right: -5px;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: $color-timeline;
			}
		}
	}
</style>
