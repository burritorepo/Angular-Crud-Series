import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { UsersRoutingModule } from './users.routing.module';
import { USERS_COMPONENTS } from './components';
import { ApiService } from '../../api/api.service';

@NgModule({
  declarations: [...USERS_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [],
  providers: [ApiService],
})
export class UsersModule { }