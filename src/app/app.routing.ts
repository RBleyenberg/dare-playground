import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } }
        ]
    },
    //{ path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});