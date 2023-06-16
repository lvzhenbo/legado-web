import type { BookState } from '#/bookshelf';
import type { InjectionKey } from 'vue';

export const bookState = Symbol() as InjectionKey<BookState>;
