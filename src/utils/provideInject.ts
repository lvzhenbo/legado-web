import type { InjectionKey } from 'vue';
export const changeMenuFoldKey = Symbol() as InjectionKey<{
  changeMenuFold: (value: boolean) => void;
}>;
