import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface Student{
  id?:number,
  name:string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CommonModule],
  // template: "Hello World",
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class03');

   name:string = "Admin";
   pass:number = 12121;

   phone:number =  1213;

   Data(){
    return this.phone = 1212;
   }

   isLogin:boolean = true; 

   login(){
     this.isLogin = true
   }
   logout(){
    this.isLogin = false
   }

   users:string[] = ["Ali" ,"Raza", "Hassan" ,"Haider"];
   number:number[] = [1,2,3,4];
   student:any[] = ["Ali",25 , 2314567];

   studentData = {
     id: 1,
     name: "Raza",
     age: 20
   }

   userData:{id:number , name: string , age?:number} = {
    id: 1,
    name: "Haider",
    age:20
   }

   students:Student[] = [
    {id:1 ,name: "nisa"},
    {id:2 , name: "manahil"},
    {id:3 , name:"saleha"},
    {id:4 , name:"hannan"}
   ];

}
