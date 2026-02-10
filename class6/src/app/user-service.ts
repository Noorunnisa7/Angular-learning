import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getUsers(){
     return [
      {name:"Ali" , age:20 , contact: "032164"},
      {name:"Sufyan" , age:22 , contact: "032164"},
      {name:"Raza" , age:23 , contact: "032164"},
      {name:"Ahmed" , age:24 , contact: "032164"},
      {name:"Hannan" , age:22 , contact: "032164"},
      {name:"mehak" , age:21 , contact: "032164"},
      {name:"Farah" , age:29 , contact: "032164"},

     ];
  }
}
