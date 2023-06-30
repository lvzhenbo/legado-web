export interface ResponseData<T = any> {
  data: T;
  errorMsg: string;
  isSuccess: boolean;
}
