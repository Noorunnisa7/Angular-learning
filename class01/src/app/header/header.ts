import { Component } from '@angular/core';
import { About } from '../about/about';

@Component({
  selector: 'app-header',
  imports: [About],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
