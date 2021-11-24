import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';;
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
    return this.http.post<MongoDBInsertReturn>('http://localhost:3000/add-student',
      {name, email, modules, date_registered})
  }
   
  
}
