import { writable } from 'svelte/store';
import type { Languages } from '../translations/types';

export const language = writable<Languages>('default');
