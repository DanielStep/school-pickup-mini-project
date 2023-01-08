import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent {
  @Input() className: string = '';
  students: Student[] = [];

  @Input('clickSubject')
  clickSubject!: Subject<any>;

   _currentPickupVehicle: string = '';
   numberOfClicks :number = 0;


    @Input() set currentPickupVehicle(value: string) {
       this._currentPickupVehicle = value;
    }

    get currentPickupVehicle(): string {
        return this._currentPickupVehicle;

    }

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();

    this.clickSubject.subscribe(e => {
      const self = this;
      this.students.forEach(function (student){
        if(student.vehicleLicenses.includes(self._currentPickupVehicle)){
          student.vehicleArrived = true;
        }
        else {
          student.vehicleArrived = false;
        }
       });
    });
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }


}
