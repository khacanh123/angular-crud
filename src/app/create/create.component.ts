import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  firstName: string = ''
  lastName:string = ''
  email:string = ''
  listUser: any = []
  constructor () {
    this.listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
  }
  add() {
   if(this.firstName == '' || this.lastName == '' || this.email == '') {
    alert('input no empty!')
   }else {
    this.listUser.push({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    })
    localStorage.setItem('listUser', JSON.stringify(this.listUser))
   }
  }
}
