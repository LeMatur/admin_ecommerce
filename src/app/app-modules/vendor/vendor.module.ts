import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/ui/ui.module';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';


@NgModule({
  declarations: [
    VendorsComponent,
    CreateVendorComponent,
    VendorProfileComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    UiModule
  ],
  exports: [
  ]
 
})
export class VendorModule {}