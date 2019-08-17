import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course', component: CourseComponent },
  { path: 'branch', component: BranchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent, AppComponent, CourseComponent, BranchComponent, MainpageComponent];
