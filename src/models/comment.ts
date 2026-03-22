import type { Moment } from "moment";

export interface Comment {
  id: number;
  author: string;
  text: string;
  date: string | Moment;
  likes: number;
  image: string | null | undefined | "";
}
