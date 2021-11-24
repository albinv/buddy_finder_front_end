import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentClass } from '../Student';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.scss']
})



export class StudentRegisterFormComponent implements OnInit {

  submitted = false;
  model!: StudentClass;

  constructor(private studentService:StudentsService, private form_builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newStudent();
  }

  newStudent(){
    this.model = new StudentClass("", "", "", [], new Date().toLocaleDateString('en-GB'));
  }

  onSubmit() {
    this.submitted = true;
    this.model.modules = this.model.modulesString.split(',');
    console.log(this.model);
    this.studentService.addStudent(
      this.model.name,
      this.model.email,
      this.model.modules,
      this.model.date_registered).subscribe(
        (_success_message) => {
            console.log("Registered")
        },
        register_response => {
          console.log("Error!");
          console.log(register_response);
        },
        () => {
          console.log("Error when trying to register student!")
        }
      );
    this.router.navigate(['registered']);
  }

}
