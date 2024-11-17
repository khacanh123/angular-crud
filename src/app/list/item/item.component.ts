import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() username: string = 'a123'
  @Input() level: string = 'user'
  @Input() products: {name: string; price: number}[] = []
  filteredProducts: {name: string; price: number}[] = []
  itemCount = 0
  constructor() {
    console.log('Constructor: Component đang được khởi tạo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('test ...');

    if (changes['products']) {
      this.filterProducts();
    }
  }

  filterProducts() {
    // Ví dụ: lọc sản phẩm có giá trên 100
    this.filteredProducts = this.products.filter(product => product.price > 100);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component được khởi tạo');
    // Khởi tạo dữ liệu hoặc thực hiện các thao tác ban đầu
  }

  ngDoCheck(): void {
    this.filterProducts()
    const newCount = this.products.length;
    if (newCount !== this.itemCount) {
      this.itemCount = newCount;
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content được khởi tạo');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content đã được kiểm tra');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View được khởi tạo');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View đã được kiểm tra');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component bị hủy');
    // Dọn dẹp dữ liệu hoặc hủy các subscriptions
  }
}
