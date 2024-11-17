import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();

  constructor() {
    this.createForm()
  }
  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId, [Validators.required, Validators.]),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      address: new FormControl(this.employeeObj.address),
      emailId: new FormControl(this.employeeObj.emailId),
      contactNo: new FormControl(this.employeeObj.contactNo),
    })
  }
  onSave() {
    // set value
    this.employeeForm.controls['empId'].setValue(1);
    // get value
    this.employeeForm.value
  }
}
