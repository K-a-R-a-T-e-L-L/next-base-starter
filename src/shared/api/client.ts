export type HttpMethod =
  | "post"
  | "put"
  | "patch"
  | "delete"
  | "get"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "GET";

export type RequestConfig<TData = unknown> = {
  url?: string;
  method?: HttpMethod;
  params?: Record<string, unknown>;
  data?: TData | FormData;
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
  signal?: AbortSignal;
  headers?: HeadersInit;
};

export type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
};

export type ResponseErrorConfig<TError = unknown> = {
  data: TError;
  status: number;
  statusText: string;
  headers: Headers;
};

export type Client = <TData = unknown, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>,
) => Promise<ResponseConfig<TData> & { __errorType?: TError }>;

export default async function client<TData = unknown, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData> & { __errorType?: TError }> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
  const rawUrl = config.url ?? "";
  const url = new URL(rawUrl, baseURL.endsWith("/") ? baseURL : `${baseURL}/`);

  if (config.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      url.searchParams.append(key, String(value));
    });
  }

  const headers = new Headers(config.headers ?? {});

  let body: BodyInit | undefined;

  if (config.data instanceof FormData) {
    body = config.data;
  } else if (config.data !== undefined && config.data !== null) {
    body = JSON.stringify(config.data);
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
  }

  const response = await fetch(url.toString(), {
    method: config.method?.toUpperCase(),
    body,
    signal: config.signal,
    headers,
  });

  const responseType = config.responseType ?? "json";
  let data: unknown;

  if (responseType === "text") {
    data = await response.text();
  } else if (responseType === "blob") {
    data = await response.blob();
  } else if (responseType === "arraybuffer") {
    data = await response.arrayBuffer();
  } else {
    const text = await response.text();
    data = text ? JSON.parse(text) : null;
  }

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`) as Error & {
      payload?: TError;
      status?: number;
    };
    error.payload = data as TError;
    error.status = response.status;
    throw error;
  }

  return {
    data: data as TData,
    status: response.status,
    statusText: response.statusText,
  } as ResponseConfig<TData> & { __errorType?: TError };
}
