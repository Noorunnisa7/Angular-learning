import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserList } from './user-list/user-list';
import { AddUser } from './add-user/add-user';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,CommonModule , UserList , AddUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class6');
}
