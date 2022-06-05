import { Guid } from "guid-typescript";
import { Classroom } from "./classroom";
import { Lesson } from "./lesson";
import { User } from "./user";
import { WorkingTime } from "./workingTime";

export interface Instructor extends User{
  lessons: Lesson[];
  classrooms: Classroom[];
  workingTimes: WorkingTime[];
}
