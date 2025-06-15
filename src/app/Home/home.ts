import { Component } from '@angular/core';
import { Slider } from '../../app/components/slider/slider';
import { Musics } from '../../app/components/musics/musics';
import { Player } from '../../app/components/player/player';

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