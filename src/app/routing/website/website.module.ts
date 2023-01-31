import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
        RouterModule.forChild([
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'home',

            },
            {
              path: 'home',
              loadChildren: () => import('./routing/home/home.module')
                  .then(module => module.HomeModule)
            },
            {
              path: '**',
              loadChildren: () => import('./routing/not-found/not-found.module')
                  .then(module => module.NotFoundModule)
            }
        ])
    ],
    exports: [RouterModule]
})
export class WebsiteModule { } 
