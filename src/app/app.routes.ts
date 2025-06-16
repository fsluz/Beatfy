import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/Home/home';
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
