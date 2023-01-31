import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersBlockModule } from '../../../../../../view/users-block/users-block.module';


@NgModule({
    declarations: [
        UsersPageComponent
    ],
    imports: [
        CommonModule,
        UsersBlockModule,
        RouterModule.forChild([
            {
                path: '',
                component: UsersPageComponent,
            }
        ])
    ],
    exports: [
        UsersPageComponent
    ]
}) 
export class UsersModule { }
