import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , UpperCasePipe , TitleCasePipe , LowerCasePipe , DatePipe , CurrencyPipe , CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('class5');

  mytitle = "Hello world";
  dateofbirth = "2012-03-30";
  amount = 20;


  number = 200;
}
