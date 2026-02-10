import { Component } from '@angular/core';
import { PersonService, Person} from '../person-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  persons: Person[] = [];

  constructor(private personService:PersonService){
    this.persons = this.personService.getPerson();
  }
}
