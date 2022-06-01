import { Guid } from "guid-typescript";
import { User } from "./user";

export interface Student extends User{
  phone: string;
}
