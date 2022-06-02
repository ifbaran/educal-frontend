import { Guid } from "guid-typescript";

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
}
