import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HorizontalNavbar } from './horizontal-navbar/horizontal-navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
