import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService , Person } from '../person-service';
@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  name = ""
  age!:number
  contact = "";

  constructor(private personService:PersonService){

  }

  submit(){
    this.personService.addPerson({
      name: this.name,
      age:this.age,
      contact: this.contact
    })
   alert("data inserted Succussfully")
   
   console.log(this.name,this.age,this.contact)

   this.name = ""
   this.age = 0
   this.contact = ""

  }



}
