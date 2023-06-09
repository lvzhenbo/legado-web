// https://github.com/tusen-ai/naive-ui/blob/main/demo/utils/route.js

import type { MenuOption } from 'naive-ui';

export function findMenuValue(options: MenuOption[], path: string): MenuOption['key'] | undefined {
  for (const option of options) {
    if (option.children) {
      const value: MenuOption['key'] = findMenuValue(option.children, path);
      if (value) return value;
    }
    if (option.path === path) {
      return option.key;
    }
  }
  return undefined;
}
