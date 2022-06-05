import { Guid } from "guid-typescript";
import { Classroom } from "./classroom";
import { User } from "./user";

export interface Student extends User{
  phone: string;
  classroom: Classroom
}
