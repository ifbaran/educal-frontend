import { Time } from "@angular/common";
import { Guid } from "guid-typescript";

export interface WorkingTime{
  guid: Guid;
  day: number;
  startTime: number;
  endTime: number;
  isBooked: boolean;
}
