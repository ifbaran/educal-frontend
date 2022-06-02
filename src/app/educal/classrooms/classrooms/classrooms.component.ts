import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from 'src/app/services/classroomService/classroom.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {

  constructor(private classRoomService: ClassroomService, private router:Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

}
