<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
	import type { Item } from './types';
	export let items: Item[] = [];
</script>

<ul>
	{#each items as item}
		<li>
			<div>
				<div class="header-wrapper">
					<div class="header">
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
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	.flex {
		display: flex;
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

	.header-wrapper {
		margin-bottom: 1rem;
		width: 100%;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	:global(.text:not(:last-child)) {
		margin-bottom: 0.5rem;
	}
</style>
