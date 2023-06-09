import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/ui/ui.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    OrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    UiModule
  ],
  exports: [
  ]
 
})
export class OrderModule {}