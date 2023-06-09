import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

const routes: Routes = [
    {path:"", component: VendorsComponent,
  children: [
    {path:"vendors", component: VendorsComponent},
    {path:"create-vendor", component: CreateVendorComponent},
    {path:"vendor-profile", component: VendorProfileComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}