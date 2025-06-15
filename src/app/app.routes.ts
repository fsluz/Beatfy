import { Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/Home/home';

export const appRoutes: Routes = [
<<<<<<< Updated upstream
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
        component: LogInComponent
    }
=======
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent }
>>>>>>> Stashed changes
];