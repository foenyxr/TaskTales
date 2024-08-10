import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  standalone: true,
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    CommonModule,
    RouterModule  
  ]  
})
export class AppComponent {
  componentTitle = "My List";

  get items() {
    return this.componentTitle;
  }
}
