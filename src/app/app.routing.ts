import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'crm', loadChildren: './modules/crm/crm.module#CrmModule', data: { breadcrumb: 'crm' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } }
        ],
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});