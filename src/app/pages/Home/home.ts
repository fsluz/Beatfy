import { Component } from '@angular/core';
import { Slider } from '../../components/slider/slider';
import { Musics } from '../../components/musics/musics';
import { Player } from '../../components/player/player';

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