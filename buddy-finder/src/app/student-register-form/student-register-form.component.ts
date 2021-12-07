import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentClass } from '../Student';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.scss']
})



export class StudentRegisterFormComponent implements OnInit {

  submitted = false;
  closeResult = '';
  model!: StudentClass;

  constructor(private studentService:StudentsService, private form_builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newStudent();
  }

  newStudent(){
    this.model = new StudentClass("", "", "", false, [], new Date().toLocaleDateString('en-GB'));
  }
  
  check_valid_module(module_name: string) {
    if (module_name.match(/^[0-9a-zA-Z]+$/)) {
      return true
    } else {
      return false
    }
  }

  onSubmit() {
    this.submitted = true;
    let valid_modules = true;
    let modules_list = this.model.modulesString.split(',');
    if (modules_list.length >0){
      for (let module_code of modules_list) {
        if (!this.check_valid_module(module_code)){
          valid_modules = false
        }
      }
    } else {
      valid_modules = false
    }
    if (valid_modules) {
      this.model.modules = modules_list;
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
    } else  {
      window.alert("Please Enter Valid modules which is seperated by a comma");
      this.router.navigate(['add-student']);
    }
  }
}
