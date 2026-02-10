import { Injectable } from '@angular/core';
export interface Person{
  name:string;
  age:number;
  contact:string;
}
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons:Person[] = [];

  addPerson(p:any){
    this.persons.push(p)
  }

  getPerson(){
    return this.persons;
  }
  
}
