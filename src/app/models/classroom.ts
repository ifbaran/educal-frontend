import { Guid } from "guid-typescript";
import { Lesson } from "./lesson";

export interface Classroom {
  guid: Guid;
  instructorId: Guid;
  lessonId: Guid;
  startDate: Date;
  capacity: number;
  totalWeek: number;
  day: number;
  startTimeHour: number;
  endTimeHour: number;
  lesson: Lesson;
}
