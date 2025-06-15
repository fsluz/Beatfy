import { Component } from '@angular/core';
<<<<<<< Updated upstream:src/app/pages/Home/home.ts
import { Slider } from '../../components/slider/slider';
import { Musics } from '../../components/musics/musics';
=======
import { Slider } from '../slider/slider';
import { Musics } from '../musics/musics';
import { Player } from '../player/player';
>>>>>>> Stashed changes:src/app/Home/home.ts

@Component({
  selector: 'home',
  standalone: true,
  imports: [Slider, Musics, Player],
  template: `
    <slider></slider>
    <musics></musics>
    <player></player>
  `
})
export class HomeComponent {}