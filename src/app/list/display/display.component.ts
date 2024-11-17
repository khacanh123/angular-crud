import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NgIf],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnDestroy {
  @Input() open: any = false;
  seconds = 0;
  private timerSubscription: Subscription | undefined;

  ngOnInit(): void {
    // Tạo một timer chạy mỗi giây
    this.timerSubscription = interval(1000).subscribe(() => {
      this.seconds++;
      console.log('running '+this.seconds);

    });
  }
  ngOnDestroy(): void {
    // Hủy subscription để tránh memory leak
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      console.log('clear interval ');

    }
  }
}
