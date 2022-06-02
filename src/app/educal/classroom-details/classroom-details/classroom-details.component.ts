import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroomService/classroom.service';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.scss']
})
export class ClassroomDetailsComponent implements OnInit {

  classRoomId!: Guid;
  classRoom!: Classroom;

  constructor(private activatedRoute: ActivatedRoute, private classRoomService: ClassroomService) {
    this.activatedRoute.params.subscribe(params => {
      this.classRoomId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getClassroomById(this.classRoomId);
  }

  getClassroomById(id: Guid) {
    this.classRoomService.getClassroomById(id).subscribe(response => {
      console.log(response.data);

    })
  }
}
