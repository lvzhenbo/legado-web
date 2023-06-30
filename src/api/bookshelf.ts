import axios from '@/utils/http/axios';
import type { ResponseData } from '#/axios';
import type { BookList } from '#/bookshelf';

export const bookshelf = () =>
  axios.request<ResponseData<BookList[]>>({
    url: '/getBookshelf',
    method: 'get',
  });
