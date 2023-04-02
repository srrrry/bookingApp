import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: '',
                redirectTo: 'appointment',
                pathMatch: 'full'
            },
            {
                path: 'appointment',
                loadChildren: () => import('../appointment/appointment.module').then(m => m.AppointmentPageModule)
            },
            {
                path: 'postpone',
                loadChildren: () => import('../postpone/postpone.module').then(m => m.PostponePageModule)
            },
            {
                path: 'history',
                loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
            },
            {
                path: 'contacts',
                loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
