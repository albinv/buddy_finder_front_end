import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MongoDBInsertReturn, Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private BASE_URL = environment.API_URL;


  constructor(private http: HttpClient) { }
    
  addStudent(name: string, email: string, modules: string[], date_registered: string): Observable<MongoDBInsertReturn> {
    return this.http.post<MongoDBInsertReturn>(`${env.BASE_URL}/add-student`, 
      {name, email, modules, date_registered})
  }
   
  
}
