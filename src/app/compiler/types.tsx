import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";
export type imageObject = {
  small: StaticImageData;
  big: StaticImageData;
};

export interface item {
  id: number;
  name: string;
  price: number;
  reduction: number;
  description: string;
  PicturesObject?: imageObject[];
  quantity?: number;
  promotion?: string;
}

// export type MyArray<Ele> = {
//   [index: number]: Ele;
// };
