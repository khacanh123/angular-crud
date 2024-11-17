import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from '../model/Employee';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  employeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();

  constructor() {
    this.createForm()
  }
  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId, [Validators.required]),
      username: new FormControl(this.employeeObj.name, [Validators.required, Validators.minLength(4)]),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      address: new FormControl(this.employeeObj.address),
      email: new FormControl(this.employeeObj.emailId, [Validators.email]),
      contactNo: new FormControl(this.employeeObj.contactNo),
    })
  }
  // onSave() {
  //   // set value
  //   this.employeeForm.controls['empId'].setValue(1);
  //   // get value
  //   this.employeeForm.value
  // }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form Value:', this.employeeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
