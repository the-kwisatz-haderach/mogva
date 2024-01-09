export async function load({ parent }) {
	const { storyblokApi } = await parent();
	// const spaceId = url.searchParams.get('_storyblok_tk[space_id]');
	// const timestamp = url.searchParams.get('_storyblok_tk[timestamp]') || '0';
	// const validationString = spaceId + ':' + PUBLIC_STORYBLOK_PREVIEW_TOKEN + ':' + timestamp;
	// const validationToken = crypto.createHash('sha1').update(validationString).digest('hex');
	// let preview = false;
	// if (
	// 	url.searchParams.get('_storyblok_tk[token]') == validationToken &&
	// 	Number.parseInt(timestamp) > Math.floor(Date.now() / 1000) - 3600
	// ) {
	// 	// you're in the edit mode.
	// 	preview = true;
	// }

	const dataStory = await storyblokApi.get('cdn/stories/resume', {
		version: 'published'
	});

	return {
		story: dataStory.data.story
	};
}
