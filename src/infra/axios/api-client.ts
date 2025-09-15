import { HttpParams, HttpResponse, HttpClient } from "@/domain";
import { api } from "@/infra";
export class ApiClient implements HttpClient {
  async post<R = any, E = any>(
    params: HttpParams<any>,
  ): Promise<HttpResponse<R, E>> {
    return await api.post(params.url, params.body, params.options);
  }
}
