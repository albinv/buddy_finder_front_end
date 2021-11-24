import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';

const routes: Routes = [
  {path: '', component: StudentRegisterFormComponent},
  {path: 'add-student', component: StudentRegisterFormComponent},
  {path: 'registered', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
