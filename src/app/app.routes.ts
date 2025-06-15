import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/Home/home';

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
    }
];