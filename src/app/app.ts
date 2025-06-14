import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HorizontalNavbar } from './horizontal-navbar/horizontal-navbar';
import { Slider } from './slider/slider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
