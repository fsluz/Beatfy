import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { Musics } from '../musics/musics';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Slider, Musics],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}