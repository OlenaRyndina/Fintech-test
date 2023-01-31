import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { UsersStoreModule } from '../../store/users-store/users-store.module';
import { UserStoreModule } from '../../store/user-store/user-store.module';
import { UsersBlockComponent } from './blocks/users-block/users-block.component';
import { SelectedUsersBlockComponent } from './blocks/selected-users-block/selected-users-block.component';
import { UsersListComponent } from './ui/users-list/users-list.component';
import { UserComponent } from './ui/user/user.component';
import { UserBlockComponent } from './blocks/user-block/user-block.component';
import { FilterUsersComponent } from '../ui/filter-users/filter-users.component';

@NgModule({
    declarations: [
        UsersBlockComponent,
        SelectedUsersBlockComponent,
        UsersListComponent,
        UserComponent,
        UserBlockComponent,
        FilterUsersComponent
    ],
    imports: [
        CommonModule,
        UsersStoreModule,
        UserStoreModule,
        MatCardModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatButtonModule
    ],
    exports: [
        UsersBlockComponent,
        SelectedUsersBlockComponent,
        UsersListComponent,
        FilterUsersComponent
    ]
})
export class UsersBlockModule { }
