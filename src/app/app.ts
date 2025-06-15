import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HorizontalNavbar } from './components/horizontal-navbar/horizontal-navbar';
import { Slider } from './components/slider/slider';
import { Musics } from './components/musics/musics';
import { Player } from './components/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar, Player, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
