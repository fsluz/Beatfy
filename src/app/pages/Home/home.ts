import { Component } from '@angular/core';
import { Slider } from '../../components/slider/slider';
import { Musics } from '../../components/musics/musics';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Slider, Musics],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}