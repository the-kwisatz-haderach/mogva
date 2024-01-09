import type { ISbRichtext } from '@storyblok/svelte';

export type Link = {
	cached_url: string;
	fieldtype: 'multilink';
	id: string;
	linktype: 'url';
	url: string;
};

export type Asset = {
	id: number;
	alt?: string;
	name: string;
	focus?: string;
	title?: string;
	source?: string;
	filename: string;
	copyright?: string;
	fieldtype: string;
};

export type ResumeExperienceBlok = {
	_uid: string;
	logo: Asset;
	tags: string[];
	text: ISbRichtext;
	title: string;
	company: string;
	component: string;
	timestamp: string;
	link?: Link;
};

export type ResumeBlok = {
	name: string;
	subtitle: string;
	description: string;
	personal: string;
	key_skills: string[];
	experience: ResumeExperienceBlok[];
	education: ResumeExperienceBlok[];
	languages: ResumeExperienceBlok[];
	certifications: ResumeExperienceBlok[];
	city: string;
	email: string;
	phone: string;
	photo: Asset;
};
