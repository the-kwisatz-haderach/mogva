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

export type BlokTypes = HeroBlok;

export type LandingPageBlok = {
	prefix: string;
	title: string;
	intro_text: string;
	contact_us_title: string;
	contact_us_text: string;
	experience_title: string;
	experience_text: string;
	experience_skill_tags: string[];
	about_title: string;
	about_text: ISbRichtext;
	clients_title: string;
	clients_description: string;
	clients_logos: Asset[];
};

export type HeroBlok = {
	title: string;
	prefix?: string;
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
