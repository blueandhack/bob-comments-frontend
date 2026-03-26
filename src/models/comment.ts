import type { Moment } from "moment";

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string | Moment;
  likes: number;
  image: string | null | undefined | "";
}


export interface Settings {
  orderBy: string;
  sort: string;
}


export const defaultSettings = {
  orderBy: "date",
  sort: "desc"
}
