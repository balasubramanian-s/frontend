import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './layout/organization/update/form.component';
import { AddComponent } from './layout/organization/add/add.component';
import { DetailsComponent } from './layout/organization/details/details.component';
import { OrganizationComponent } from './layout/organization/organization.component';
import { LoginComponent } from './layout/login/login.component'



import { FacultyComponent } from './layout/organization/faculty/faculty.component';
import { AllFacultyComponent } from './layout/faculty/all-faculty/all-faculty.component';
import { AddFacultyComponent } from './layout/faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './layout/faculty/roles/roles.component';

import { EditfacultyComponent } from './layout/faculty/editfaculty/editfaculty.component';
import { OrgStudentsComponent } from './layout/Students/org-students/org-students.component';
import { AllStudentsComponent } from './layout/Students/all-students/all-students.component';
import { EditStudentsComponent } from './layout/Students/edit-students/edit-students.component';
import { AddStudentsComponent } from './layout/Students/add-students/add-students.component';
import { StudentDetailsComponent } from './layout/Students/student-details/student-details.component';
import { LogoutComponent } from './layout/logout/logout.component';
import { AuthGuard } from './Authentication/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: OrganizationComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "edit/:id",
    component: FormComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "add",
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "faculty/:id/:name",
    component: FacultyComponent,
    canActivate: [AuthGuard]
  }, {
    path: "allstudents",
    component: AllStudentsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "students/:id/:name",
    component: OrgStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "studentDetails/:id",
    component: StudentDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "students/",
    component: AllStudentsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "editStudent/:id/:instid",
    component: EditStudentsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "addStudent/:id/:name",
    component: AddStudentsComponent,
    canActivate: [AuthGuard]

  }, {
    path: "addstudent",
    component: AddStudentsComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "faculty",
    component: AllFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addFaculties/:id/:name",
    component: AddFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addFaculties",
    component: AddFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editfaculty/:id/:id1/:name",
    component: EditfacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "roles",
    component: RolesComponent,
    canActivate: [AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
