import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {
  activeRightMenu: string = "";
  activeToggle: string = "active";
  isPushed: string = "is-pushed-block";
  activeAction: string = "";
  activeSidebar: string = "is-active";
  isSaving: boolean = false;
  createSubCategoryForm!: FormGroup;
  openCreateSubCategoryModal: string = "";
  updateSubCategoryForm!: FormGroup;
  openUpdateSubCategoryModal: string = "";

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.createSubCategoryForm = this.formBuilder.group({
      img: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })

    this.updateSubCategoryForm = this.formBuilder.group({
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
    this.openCreateSubCategoryModal = "is-active";
  }

  closeCreateSubCategoryModal() {
    this.openCreateSubCategoryModal = "";
  }

  onCreateSubCategory() {}

  onOpenUpdateModal() {
    this.openUpdateSubCategoryModal = "is-active";
  }

  closeUpdateSubCategoryModal() {
    this.openUpdateSubCategoryModal = "";
  }

  onUpdateSubCategory() {}
}
