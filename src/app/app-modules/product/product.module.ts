import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/ui/ui.module';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    UiModule
  ],
  exports: [
  ]
 
})
export class ProductModule{}