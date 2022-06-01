import { Guid } from "guid-typescript";

export interface User {
  id: Guid;
  name: string;
  surname: string;
  email: string;
  password: string;
}
