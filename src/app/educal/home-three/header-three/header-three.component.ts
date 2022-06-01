import { Component, HostListener, OnInit } from '@angular/core';

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
    this.auth = false;
    return this.auth;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
