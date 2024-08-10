import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule

import { LoginComponent } from './login/login.component';

@Component({
  standalone: true,
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule // Include RouterModule in the imports array
    ,
    LoginComponent
]  
})
export class AppComponent {
  componentTitle = "My List";


  filter: string = 'all';

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false }
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === "done" ? item.done : !item.done);
  }

}
