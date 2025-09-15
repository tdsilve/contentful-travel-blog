import { HttpParams, HttpResponse } from "./types";
export interface HttpClient {
  post: <R = any, T = any>(params: HttpParams<T>) => Promise<HttpResponse<R>>;
}
