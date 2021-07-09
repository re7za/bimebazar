import { req } from "../../helpers/request";

export const getUser = async (token: string) => {
  return await req({
    method: "GET",
    url: "/api/campaigns/friendship/self/",
    headers: { authorization: token },
  });
};
