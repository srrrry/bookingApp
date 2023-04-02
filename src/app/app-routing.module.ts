import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'appointment',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentPageModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
    },
    {
        path: 'postpone',
        loadChildren: () => import('./postpone/postpone.module').then(m => m.PostponePageModule)
    },
    {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
