import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/ui/ui.module';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    UiModule
  ],
  exports: [
  ]
 
})
export class UserModule {}