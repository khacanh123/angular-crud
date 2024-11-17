import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { DisplayComponent } from './display/display.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, ItemComponent, DisplayComponent, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  router = inject(Router)
  username = 'aaaa'
  level = '123'
  data = [
    {name: 'san pham A', price: 80},
    {name: 'san pham B', price: 180},
    {name: 'san pham C', price: 110},
  ]
  open: boolean = false
  constructor() {
    const isAuth = localStorage.getItem('Auth');
    // if(isAuth == null) {
    //   this.router.navigateByUrl('create')
    // }
  }
  update() {
    this.username = 'anhnk3';
    this.level = 'admin'
  }
  push() {
    this.data.push({name: `san pham ${this.data.length}`, price: 300})
  }
  show() {
    this.open = !this.open
  }
}
