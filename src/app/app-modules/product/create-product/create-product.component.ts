import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  activeToggle: string = "";
  isPushed: string = "";
  activeFileInput: string = "is-hidden";
  activeFileEdit: string = "";
  activeFileBack: string = "is-hidden";
  urls: string[] = [];

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

  selectFiles(event: any) {
    if(event.target.files) {
      for(var i = 0; i < File.length; i++) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[i]);
        
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }
}
