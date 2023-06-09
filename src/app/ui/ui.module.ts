import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class UiModule { }
