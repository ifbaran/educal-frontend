import { Component, HostListener, OnInit,Input } from '@angular/core';
import { LessonService } from 'src/app/services/lessonService/lesson.service';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  constructor () {}

  ngOnInit(): void {
    console.log(this.isAuthorized());

  }

  @Input () headerShadow : string | undefined;

  headerSticky : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;
  auth: boolean = false;

  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }

  // home dropdown
  homeDropdown () {
    this.showHomeDropdown = !this.showHomeDropdown
  }
  // coursesDropdown
  coursesDropdown () {
    this.showCoursesDropdown = !this.showCoursesDropdown
  }

  // blogDropdown
  blogDropdown () {
    this.showBlogDropdown = !this.showBlogDropdown
  }
  // pagesDropDown
  pagesDropDown () {
    this.showPagesDropdown = !this.showPagesDropdown
  }

  isAuthorized(){
    let token = localStorage.getItem("token");
    if (token) {
      this.auth = true;
    }
    return this.auth;
  }

  signOut(){
    localStorage.removeItem('token');
    this.auth = false;
    return this.auth;
  }

}
