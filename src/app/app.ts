import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
import { Navbar } from './components/navbar/navbar';
import { HorizontalNavbar } from './components/horizontal-navbar/horizontal-navbar';
import { Slider } from './components/slider/slider';
import { Musics } from './components/musics/musics';
import { Player } from './components/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar, Player, Slider],
=======

import { Navbar } from './navbar/navbar';
import { HorizontalNavbar } from './horizontal-navbar/horizontal-navbar';
import { Slider } from './slider/slider';
import { Musics } from './musics/musics';
import { Player } from './player/player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    HorizontalNavbar,
    Slider,
    Musics,
    Player
  ],
>>>>>>> Stashed changes
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}