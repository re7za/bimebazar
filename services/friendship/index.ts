import { req } from "../../helpers/request";

export const fetchFriendship = async () => {
  return await req({
    method: "GET",
    url: "/api/super_hero_landing/?main_type=friendship-landing",
  });
};
