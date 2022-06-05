import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './educal/Home/Home/home.component';
import { HomeTwoComponent } from './educal/home-two/home-two-main/home-two.component';
import { HomeThreeComponent } from './educal/home-three/home-three-main/home-three.component';
import { CoursesPageComponent } from './educal/courses/courses-page/courses-page.component';
import { CoursesListPageComponent } from './educal/courses-list-page/courses-list-main/courses-list-page.component';
import { CourseSidebarMainComponent } from './educal/course-sidebar/course-sidebar-main/course-sidebar-main.component';
import { CourseDetailsComponent } from './educal/course-details/course-details-main/course-details.component';
import { BlogComponent } from './educal/blog/blog-main/blog.component';
import { BlogDetailsMainComponent } from './educal/blog-details/blog-details-main/blog-details-main.component';
import { AboutMainComponent } from './educal/about/about-main/about-main.component';
import { InstructorMainComponent } from './educal/instructor/instructor-main/instructor-main.component';
import { InstructorDetailsComponent } from './educal/instructor-details/instructor-details-main/instructor-details.component';
import { EventDetailsMainComponent } from './educal/event-details/event-details-main/event-details-main.component';
import { CartComponent } from './educal/cart/cart-main/cart.component';
import { WishlistMainComponent } from './educal/wishlist/wishlist-main/wishlist-main.component';
import { CheckoutMainComponent } from './educal/checkout/checkout-main/checkout-main.component';
import { SignInMainComponent } from './educal/sign-in/sign-in-main/sign-in-main.component';
import { SignUpMainComponent } from './educal/sign-up/sign-up-main/sign-up-main.component';
import { ErrorPageComponent } from './educal/error-page/error-page.component';
import { ContactMainComponent } from './educal/contact/contact-main/contact-main.component';
import { CourseAddComponent } from './educal/course-add/course-add/course-add.component';
import { CourseUpdateComponent } from './educal/course-update/course-update/course-update.component';
import { ClassroomAddComponent } from './educal/classroom-add/classroom-add/classroom-add.component';
import { ClassroomDetailsComponent } from './educal/classroom-details/classroom-details/classroom-details.component';
import { InstructorAddComponent } from './educal/instructor-add/instructor-add/instructor-add.component';
import { ManagersComponent } from './educal/managers/managers/managers.component';
import { ManagerDetailsComponent } from './educal/manager-details/manager-details/manager-details.component';
import { ManagerAddComponent } from './educal/manager-add/manager-add/manager-add.component';
import { MyCoursesComponent } from './educal/my-courses/my-courses/my-courses.component';




const routes: Routes = [
  { path: '', component: HomeThreeComponent },
  { path: 'home', component: HomeThreeComponent },
  {
    path: 'home-two',
    component: HomeTwoComponent
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  },
  {
    path: 'courses-list',
    component: CoursesListPageComponent
  },
  {
    path: 'courses-sidebar',
    component: CourseSidebarMainComponent
  },
  {
    path: 'course-details/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'manager-details/:id',
    component: ManagerDetailsComponent
  },
  {
    path: 'managers',
    component: ManagersComponent
  },
  {
    path: 'manager-add',
    component: ManagerAddComponent
  },
  {
    path: 'my-courses',
    component: MyCoursesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsMainComponent
  },
  {
    path: 'about',
    component: AboutMainComponent
  },
  {
    path: 'instructor',
    component: InstructorMainComponent
  },
  {
    path: 'instructor-details/:id',
    component: InstructorDetailsComponent
  },
  {
    path: 'classroom-add',
    component: ClassroomAddComponent
  },
  {
    path: 'classroom-details/:id',
    component: ClassroomDetailsComponent
  },
  {
    path: 'event-details',
    component: EventDetailsMainComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistMainComponent
  },
  {
    path: 'checkout',
    component: CheckoutMainComponent
  },
  {
    path: 'sign-in',
    component: SignInMainComponent
  },
  {
    path: 'sign-up',
    component: SignUpMainComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'contact',
    component: ContactMainComponent
  },
  {
    path: 'course-add',
    component: CourseAddComponent
  },
  {
    path: 'instructor-add',
    component: InstructorAddComponent
  },
  {
    path: 'course-update',
    component: CourseUpdateComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
