import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  activeToggle: string = "";
  isPushed: string = "";
  activeAvatar: string = "";
  activeFileInput: string = "is-hidden";
  activeFileEdit: string = "";
  activeFileBack: string = "is-hidden";

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
}
