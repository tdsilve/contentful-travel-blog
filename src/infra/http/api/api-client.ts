import { HttpParams, HttpResponse, HttpPostClient } from "@/domain";
import { api } from "@/infra";

export class ApiClient implements HttpPostClient {
  async post<R = any, B = any, E = any>(
    params: HttpParams<B>,
  ): Promise<HttpResponse<R, E>> {
    return api.post<R>(params.url, params.body, params.options);
  }
}
