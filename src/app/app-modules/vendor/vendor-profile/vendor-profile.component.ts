import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent {
  activeToggle: string = "";
  isPushed: string = "";
  activeAvatar: string = "";
  activeFileInput: string = "is-hidden";
  activeFileEdit: string = "";
  activeFileBack: string = "is-hidden";
  activeGeneral: string = "is-active";
  activeStats: string = "";
  activeSetting: string = "";
  isGeneral: string = "";
  isStats: string = "is-hidden";
  isSetting: string = "is-hidden";

  constructor() { }

  ngOnInit(): void {
  }

  activeHomeSider() {
    if (this.activeToggle == "") {
      this.activeToggle = "active";
      this.isPushed = "is-pushed-full";
    } else {
      this.activeToggle = "";
      this.isPushed = "";
    }
  }

  onEditPicture() {
    this.activeFileBack = "";
    this.activeAvatar = "is-hidden";
    this.activeFileInput = "";
    this.activeFileEdit = "is-hidden";
  }

  onBackPicture() {
    this.activeFileBack = "is-hidden";
    this.activeAvatar = "";
    this.activeFileInput = "is-hidden";
    this.activeFileEdit = "";
  }

  onActiveGeneral() {
    this.activeGeneral = "is-active";
    this.activeStats = "";
    this.activeSetting = "";
    this.isGeneral = "";
    this.isStats = "is-hidden";
    this.isSetting = "is-hidden";
  }

  onActiveStats() {
    this.activeGeneral = "";
    this.activeStats = "is-active";
    this.activeSetting = "";
    this.isGeneral = "is-hidden";
    this.isStats = "";
    this.isSetting = "is-hidden";
  }

  onActiveSetting() {
    this.activeGeneral = "";
    this.activeStats = "";
    this.activeSetting = "is-active";
    this.isGeneral = "is-hidden";
    this.isStats = "is-hidden";
    this.isSetting = "";
  }

}
