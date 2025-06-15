import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HorizontalNavbar } from './horizontal-navbar/horizontal-navbar';
import { Slider } from './slider/slider';
import { Musics } from './musics/musics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
