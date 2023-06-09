import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
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
