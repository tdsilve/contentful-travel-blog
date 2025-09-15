export type HttpParams<T = any> = {
  url: string;
  body?: T;
  query?: QueryParams;
  options?: {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeout?: number;
  };
};

export type QueryParams = Record<string, any>;

export type HttpResponse<T = any, E = any> = {
  data: T;
  status?: number;
  error?: E;
};
