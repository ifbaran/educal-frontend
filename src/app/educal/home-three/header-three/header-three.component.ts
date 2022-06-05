import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss']
})
export class HeaderThreeComponent implements OnInit {

  headerSticky : boolean = false;
  searchBar : boolean = false;
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

  handleSearch () {
    if(!this.searchBar){
      this.searchBar = true;
    }
    else{
      this.searchBar = true;
    }
  }
  handleSearchClose () {
    this.searchBar = false;
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
    if(token){
      this.auth = true;
    }
    return this.auth;
  }

  signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    this.auth = false;
    return this.auth;
  }

  loggedUserIsStudent(){
    if (localStorage.getItem("userType") == 'Student') {
      return true;
    }
    return false;
  }

  loggedUserIsManager(){
    if (localStorage.getItem("userType") == 'Manager') {
      return true;
    }
    return false;
  }

  loggedUserIsRegistrar(){
    if (localStorage.getItem("userType") == 'Registrar') {
      return true;
    }
    return false;
  }

  loggedUserIsInstructor(){
    if (localStorage.getItem("userType") == 'Instructor') {
      return true;
    }
    return false;
  }

  courseAddUpdateAuthenticate(){
    if (localStorage.getItem("userType") == 'Manager' || localStorage.getItem("userType") == 'Registrar') {
      return true;
    }
    return false;
  }


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
