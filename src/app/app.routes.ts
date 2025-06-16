import { Routes } from '@angular/router';
import { logsComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/Home/home';
import { RegisterComponent } from './pages/Register/register';
import { CategoriasComponent } from './pages/Categorias/categorias.component';
import { PodcastsComponent } from './pages/Podcasts/podcasts.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: logsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'podcasts',
    component: PodcastsComponent
  }
];