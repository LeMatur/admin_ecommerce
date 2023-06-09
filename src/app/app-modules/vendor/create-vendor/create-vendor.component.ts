import { Component } from '@angular/core';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent {
  activeRightMenu: string = "";
  activeToggle: string = "";
  homeSider: string = "";
  isPushed: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  activeHomeSider() {
    if (this.activeToggle == "") {
      this.activeToggle = "active";
      this.homeSider = "is-active";
      this.isPushed = "is-pushed-full";
    } else {
      this.activeToggle = "";
      this.homeSider = "";
      this.isPushed = "";
    }

  }
}
