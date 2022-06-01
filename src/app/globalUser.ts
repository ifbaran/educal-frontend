import { Customer } from "./models/customer";
import { Instructor } from "./models/instructor";
import { Manager } from "./models/manager";
import { Registrar } from "./models/registrar";
import { Student } from "./models/student";

export interface GlobalUser {
  student: Student;
  manager: Manager;
  instructor: Instructor;
  customer: Customer;
  registrar: Registrar;
}
