import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/services/managerService/manager.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {

  constructor(private managerService: ManagerService, private router: Router) { }

  managerData!: Manager[];
  img = 'assets/img/teacher/teacher-4.jpg';

  ngOnInit(): void {
    this.getAllManagers();
  }

  getAllManagers(){
    this.managerService.getAllManagers().subscribe(response => {
      this.managerData = response.data;
    })
  }

  goToManagerDetail(manager: Manager){
    this.router.navigate(['/manager-details', manager.guid])
  }
}
