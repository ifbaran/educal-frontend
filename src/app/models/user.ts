import { Guid } from "guid-typescript";

export interface User {
  guid: Guid;
  name: string;
  surname: string;
  email: string;
  password: string;
}
