import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProfileComponent } from "../profile/profile.component";

interface Task {
  name: string;
  priority: number; 
  done: boolean;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProfileComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  todayTasks: Task[] = [
    { name: 'Task 1', priority: 1, done: false },
    { name: 'Task 2', priority: 2, done: false },
    { name: 'Task 3', priority: 3, done: false }
  ];

  tomorrowTasks: Task[] = [
    { name: 'Task 4', priority: 1, done: false },
    { name: 'Task 5', priority: 2, done: false },
    { name: 'Task 6', priority: 3, done: false }
  ];

  markAsDone(task: Task) {
    task.done = !task.done;
  }

}
