import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'system' | 'light' | 'dark';

const defaultTheme = browser ? (localStorage.getItem('theme') as Theme) : 'system';

const theme = writable<Theme>(defaultTheme || 'system');

if (browser) {
	theme.subscribe((value) => localStorage.setItem('theme', value));
}

export { theme };
