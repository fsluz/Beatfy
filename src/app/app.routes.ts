import { Routes } from '@angular/router';
import { logsComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/Home/home';
import { RegisterComponent} from './pages/Register/register';

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
    }
    
];