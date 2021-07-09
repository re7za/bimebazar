import { req } from "../../helpers/request";

export const sendNumber = async (number: string) => {
  return await req("POST", "/accounts/api/login_sec/", {
    source: "friendship",
    username: number,
  });
};

export const sendVerificationCode = async (code: string, username: string) => {
  return await req("POST", "/accounts/api/login_sec/", {
    code,
    username,
  });
};

export const sendUserName = async (nickname: string) => {
  return await req("POST", "/accounts/api/user-profile/", {
    avatar: "/media/avatars_samples/avatar_2.svg",
    nickname,
  });
};
