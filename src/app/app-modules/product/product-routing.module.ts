import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {path:"", component: ProductsComponent,
  children: [
    {path:"products", component: ProductsComponent},
    {path:"create-product", component: CreateProductComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}