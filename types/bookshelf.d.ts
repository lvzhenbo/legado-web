export interface BookList {
  author?: string;
  bookUrl?: string;
  canUpdate?: boolean;
  coverUrl?: string;
  customCoverUrl?: string;
  durChapterIndex?: number;
  durChapterPos?: number;
  durChapterTime?: number;
  durChapterTitle?: string;
  group?: number;
  intro?: string;
  kind?: string;
  lastCheckCount?: number;
  lastCheckTime?: number;
  latestChapterTime?: number;
  latestChapterTitle?: string;
  name?: string;
  order?: number;
  origin?: string;
  originName?: string;
  originOrder?: number;
  readConfig?: ReadConfig;
  tocUrl?: string;
  totalChapterNum?: number;
  type?: number;
  wordCount?: string;
}

export interface ReadConfig {
  delTag: number;
  imageStyle: string;
  pageAnim: number;
  reSegment: boolean;
  reverseToc: boolean;
  splitLongChapter: boolean;
  useReplaceRule: boolean;
}

export type BookState = {
  show: Ref<boolean>;
  bookDetail: Ref<BookList>;
};
