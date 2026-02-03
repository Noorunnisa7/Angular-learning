import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class04');


  name:string = "Aptech";

  message = "Hello Angular!"

   mytext = "Hello Event binding";

   ChangeData(value: any){
    this.mytext = value;
   }

   UpdateData(){
    this.mytext = "Hello Angular! update data function";
   }
  // onChange("Hello")


  language = "Angular js "
}
