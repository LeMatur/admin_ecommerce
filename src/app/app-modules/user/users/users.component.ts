import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  activeRightMenu: string = "";
  activeToggle: string = "active";
  isPushed: string = "is-pushed-block";
  activeAction: string = "";
  @Input() activeSidebar: string = "is-active";

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
