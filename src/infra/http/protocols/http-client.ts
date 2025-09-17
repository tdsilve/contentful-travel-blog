import { HttpParams, HttpResponse } from "@/infra";
export interface HttpPostClient {
  post: <R = any, B = any, E = any>(
    params: HttpParams<B>,
  ) => Promise<HttpResponse<R, E>>;
}
