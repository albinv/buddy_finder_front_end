import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';

const routes: Routes = [
  {path: '', component: StudentRegisterFormComponent},
  {path: 'add-student', component: StudentRegisterFormComponent},
  {path: 'registered', component: SuccessMsgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
