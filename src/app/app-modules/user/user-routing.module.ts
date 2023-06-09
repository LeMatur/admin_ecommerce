import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"", component: UsersComponent,
  children: [
    {path:"users", component: UsersComponent},
    {path:"user-profile", component: UserProfileComponent},
    {path:"create-user", component: CreateUserComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}