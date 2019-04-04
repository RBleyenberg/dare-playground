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
            // tslint:disable-next-line:max-line-length
            { path: 'crm/landen', loadChildren: './modules/crm/algemeen/landen/landen.module#LandenModule', data: { breadcrumb: 'landen' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
        ]}

    // { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: false
});
