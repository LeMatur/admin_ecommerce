import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from 'src/app/ui/ui.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriesComponent,
    SubCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    UiModule
  ],
  exports: [
  ]
 
})
export class CategoryModule {}