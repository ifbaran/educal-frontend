import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructorService/instructor.service';

@Component({
  selector: 'app-instructor-area',
  templateUrl: './instructor-area.component.html',
  styleUrls: ['./instructor-area.component.scss']
})
export class InstructorAreaComponent implements OnInit {

  img = 'assets/img/teacher/teacger-1.jpg';
  instructorData!: Instructor[];


  constructor(private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  getAllInstructors(){
    this.instructorService.getAll().subscribe(response => {
      this.instructorData = response.data;
    })
  }

  goToInstructorDetail(instructor:Instructor){
    this.router.navigate(['/instructor-details', instructor.guid])
  }

}
