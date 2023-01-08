import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 12, name: 'Daniel', vehicleLicenses: ['abc-123'] },
      { id: 13, name: 'Sam', vehicleLicenses: ['abc-123'] },
      { id: 14, name: 'Amanda', vehicleLicenses: ['yxz-456'] },
      { id: 15, name: 'Huw', vehicleLicenses: ['yxz-456'] },
      { id: 16, name: 'Ryan', vehicleLicenses: ['abc-123', 'yxz-456'] }
    ];

    const classes = [
      { id: 1, name: 'Class A' },
      { id: 2, name: 'Class B' },
    ]
    return {students, classes};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}