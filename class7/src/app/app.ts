import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class7');

  users: any[] = [];

  constructor(private http:HttpClient ){}

  loadUsers(){
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(data)=> {
        console.log(data)
        this.users = data
        console.log(this.users)
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

}


//form validation 