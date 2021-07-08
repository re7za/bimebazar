export interface ICenterSection {
  button_text: string;
  image: string;
  text: string;
  title: string;
  reverse?: boolean;
}

export interface IMeta {
  meta_type: string;
  meta_description: string;
  meta_image: string;
  meta_title: string;
  meta_url: string;
  super_hero_type: string;
}

interface IFriendshipData {
  items: ICenterSection[];
  meta: IMeta;
}

interface IFriendshipRes {
  data: IFriendshipData;
}

export interface IFriendship {
  res: IFriendshipRes;
}
