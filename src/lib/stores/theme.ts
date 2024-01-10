import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const defaultTheme = browser && (localStorage.getItem('theme') as Theme);

const theme = writable<Theme>(defaultTheme || 'dark');

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}

export { theme };
