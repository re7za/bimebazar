import { apiUrl } from "../services/constant";

type methodType = "GET" | "POST" | "DELETE" | "PUT";
interface reqProps {
  method: methodType;
  url: string;
  data?: any;
  headers?: any;
}

export const req = ({ method, url, data, headers }: reqProps) => {
  return fetch(apiUrl + url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }).then((res) => res.json());
};
