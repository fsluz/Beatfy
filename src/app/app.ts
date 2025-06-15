import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HorizontalNavbar } from './horizontal-navbar/horizontal-navbar';
import { Slider } from './slider/slider';
import { Musics } from './musics/musics';
import { Player } from './player/player';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [RouterOutlet, Navbar, HorizontalNavbar],
=======
  imports: [RouterOutlet, Navbar, HorizontalNavbar, Slider, Musics, Player],
>>>>>>> 726bb597e9d638c46ebd732d10f804f937e9465c
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
