import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { UsersRoutingModule } from './users.routing.module';
import { USERS_COMPONENTS } from './components';
import { UserService } from '../../api';

@NgModule({
  declarations: [...USERS_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [],
  providers: [UserService],
})
export class UsersModule { }