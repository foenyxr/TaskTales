import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GachaComponent } from './gacha/gacha.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'gacha', component: GachaComponent },
  { path: 'tasks', component: TasksComponent }
];
