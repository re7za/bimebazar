import { apiUrl } from "../services/constant";

type methodType = "GET" | "POST" | "DELETE" | "PUT";

export const req = (method: methodType, url: string, data?: any) => {
  return fetch(apiUrl + url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((res) => res.json());
};
