import { ReactNode } from "react";

export default interface BoxModel {
  key: number
  color: string;
  height: string;
  width: string;
  onClick?: Function;
  children?: ReactNode;
}