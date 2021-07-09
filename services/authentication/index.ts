import { req } from "../../helpers/request";

export const sendNumber = async (number: string) => {
  return await req({
    method: "POST",
    url: "/accounts/api/login_sec/",
    data: {
      source: "friendship",
      username: number,
    },
  });
};

export const sendVerificationCode = async (code: string, username: string) => {
  return await req({
    method: "POST",
    url: "/accounts/api/login_sec/",
    data: {
      code,
      username,
    },
  });
};

export const sendUserName = async (nickname: string) => {
  return await req({
    method: "POST",
    url: "/accounts/api/user-profile/",
    data: {
      avatar: "/media/avatars_samples/avatar_2.svg",
      nickname,
    },
  });
};
