import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectedUsersPageComponent } from './pages/selected-users-page/selected-users-page.component';
import { UsersBlockModule } from '../../../../../../view/users-block/users-block.module';


@NgModule({
    declarations: [
        SelectedUsersPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SelectedUsersPageComponent
            }
        ]),
        UsersBlockModule
    ]
})
export class SelectedUsersModule { }
