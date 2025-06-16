import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HorizontalNavbar } from './components/horizontal-navbar/horizontal-navbar';
import { Player } from './components/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HorizontalNavbar, Player],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Beatfy';
}
