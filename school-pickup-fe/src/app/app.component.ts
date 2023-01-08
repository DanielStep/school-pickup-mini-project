import { Component } from '@angular/core';
import { Class } from './class';
import { StudentService } from './student.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Pickup';
  classes: Class[] = [];
  currentPickupVehicle: string = '';

  clickSubject:Subject<any> = new Subject();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getClasses();
    console.log("classes:" + this.classes)
  }

  notifyClick() {
    this.clickSubject.next(1);
  }

  getClasses(): void {
    this.studentService.getClasses().subscribe(classes => this.classes = classes);
  }

}
