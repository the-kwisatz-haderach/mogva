import kthLogo from '$lib/assets/images/kth_logo.png';
import type { Item } from '../ExperienceList/types';

export const educations: Item[] = [
	{
		imgSrc: kthLogo,
		title: 'Media Management',
		subtitle: 'Kungliga Tekniska Högskolan, Stockholm',
		timestamp: '2011 - 2014',
		text: [
			'The programme combines media technology with intercultural communication, project management, business management and development.'
		]
	},
	{
		imgSrc: kthLogo,
		title: 'Human-Computer Interaction',
		subtitle: 'Kungliga Tekniska Högskolan, Stockholm',
		timestamp: '2008 - 2011',
		text: [
			'Studying the use of computer technology and interfaces, including usability principles, prototyping and interaction design.'
		]
	}
];
