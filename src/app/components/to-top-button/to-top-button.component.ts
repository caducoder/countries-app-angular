import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  template: `
    <button mat-icon-button aria-label="To top" class="to-top" (click)="scrollToTop()"
    [ngClass]="{ 'show-scrollTop': windowScrolled }">
      <mat-icon class="icon">arrow_upward</mat-icon>
    </button>
  `,
  styleUrls: ['./to-top-button.component.css']
})
export class ToTopButtonComponent implements OnInit {

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY > 400;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
