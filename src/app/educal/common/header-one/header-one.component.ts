import { Component, HostListener, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  @Input () header__white : string | undefined

  headerSticky : boolean = false;
  showCart : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;
  auth: boolean = false;

  // cart quantity
  count = 1;
  countTwo = 1;
  countThree = 1;

// sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }
// handleCartToggle
  handleCartToggle () {
    this.showCart = true;
  }
  handleCartClose () {
    this.showCart = false;
  }
  handleAddCart (number : string) {
    if(number === 'one'){
      this.count++
    }
    if(number === 'two'){
      this.countTwo++
    }
    if(number === 'three'){
      this.countThree++
    }
  }
  handleDecreaseCart (number : string){
    if(number === 'one' && this.count > 1){
      this.count--
    }
    if(number === 'two' && this.countTwo > 1){
      this.countTwo--
    }
    if(number === 'one' && this.countThree > 1){
      this.countThree--
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
    let token = localStorage.getItem('token')
    if (token) {
      this.auth = true;
    }
    return this.auth;
  }

  loggedUserIsStudent(){
    if (localStorage.getItem("userType") == "Student") {
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

  signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    this.auth = false;
    return this.auth;
  }

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {

  }

}
