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

  addPerson(p:Person){     // push
    this.persons.push(p)
  }

  getPerson(){
    return this.persons;   // fetch
  }

  removePerson(index:number){
      this.persons.splice(index,1)
      
  }

  editPerson(index:number ,p:Person){
    this.persons[index] = p
  }
  
}
