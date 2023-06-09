import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateVendorComponent } from './vendor/create-vendor/create-vendor.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { SubCategoriesComponent } from './category/sub-categories/sub-categories.component';
import { CreateProductComponent } from './product/create-product/create-product.component';

const routes: Routes = [
  {
    path:"", component: AppContentComponent,
    children: [
      {
        path:"create-user", component: CreateUserComponent
      },
      {
        path:"create-vendor", component: CreateVendorComponent
      },
      {
        path:"user-profile", component: UserProfileComponent
      },
      {
        path:"vendor-profile", component: VendorProfileComponent
      },
      {
        path:"sub-categories", component: SubCategoriesComponent
      },
      {
        path:"create-product", component: CreateProductComponent
      },
      {
        path : 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path : 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path : 'vendors',
        loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule)
      },
      {
        path : 'categories',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path : 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path : 'orders',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
    ]
   },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppModulesRoutingModule { }
