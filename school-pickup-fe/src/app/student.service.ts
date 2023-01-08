import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Class } from './class';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'api/students';
  private classUrl = 'api/classes';


  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
  }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classUrl)
  }

}
