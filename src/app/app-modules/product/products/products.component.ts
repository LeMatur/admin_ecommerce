import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  activeRightMenu: string = "";
  activeToggle: string = "active";
  isPushed: string = "is-pushed-block";
  activeAction: string = "";
  activeSidebar: string = "is-active";

  constructor() { }

  ngOnInit(): void {
  }

  activeHomeSider() {
    if (this.activeToggle == "active") {
      this.activeToggle = "";
      this.isPushed = "";
      this.activeSidebar = "";
    } else {
      this.activeToggle = "active";
      this.isPushed = "is-pushed-block";
    }
  }

  onActiveAction() {
    if (this.activeAction == "") {
      this.activeAction = "is-active";
    } else {
      this.activeAction = "";
    }
  }
}
