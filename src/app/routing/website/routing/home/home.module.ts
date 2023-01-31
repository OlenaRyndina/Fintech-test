import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterBlockModule } from '../../../../view/footer-block/footer-block.module';
import { HeaderBlockModule } from '../../../../view/header-block/header-block.module';
import { SidebarBlockModule } from '../../../../view/sidebar-block/sidebar-block.module';
import { UsersBlockModule } from '../../../../view/users-block/users-block.module';
import { SelectedUsersBlockComponent } from '../../../../view/users-block/blocks/selected-users-block/selected-users-block.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule.forChild([
            {
                path: '',               
                component: HomePageComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'users',
                    },
                    {
                        path: 'users',
                        loadChildren: () => import('./routing/users/users.module')
                            .then(module => module.UsersModule)
                    },
                    {
                        path: 'selectedUsers',                      
                        loadChildren: () => import('./routing/selected-users/selected-users.module')
                            .then(module => module.SelectedUsersModule)
                    },
                ]
            },
        ]),
        FooterBlockModule,
        HeaderBlockModule,
        SidebarBlockModule,
        UsersBlockModule
    ],
    exports: [RouterModule]
})
export class HomeModule { }
