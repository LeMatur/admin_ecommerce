import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  activeRightMenu: string = "";
  activeToggle: string = "active";
  isPushed: string = "is-pushed-block";
  activeAction: string = "";
  activeSidebar: string = "is-active";
  isSaving: boolean = false;
  createCategoryForm!: FormGroup;
  openCreateCategoryModal: string = "";
  updateCategoryForm!: FormGroup;
  openUpdateCategoryModal: string = "";

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.createCategoryForm = this.formBuilder.group({
      img: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })

    this.updateCategoryForm = this.formBuilder.group({
      img: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })
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

  onOpenCreateModal() {
    this.openCreateCategoryModal = "is-active";
  }

  closeCreateCategoryModal() {
    this.openCreateCategoryModal = "";
  }

  onCreateCategory() {}

  onOpenUpdateModal() {
    this.openUpdateCategoryModal = "is-active";
  }

  closeUpdateCategoryModal() {
    this.openUpdateCategoryModal = "";
  }

  onUpdateCategory() {}
}
