import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.scss']
})
export class StudentRegisterFormComponent implements OnInit {

  public successMsg: string | undefined
  public errorMsg: string | undefined
  private name!: string;
  private email!: string;
  private modules!: string[]
  

  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
  }

  registerStudent(){
    this.successMsg = '';
    this.errorMsg = '';
    this.studentService.addStudent
  }

}
