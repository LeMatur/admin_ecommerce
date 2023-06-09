import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

const routes: Routes = [
  {path:"", component: CategoriesComponent,
  children: [
    {path:"categories", component: CategoriesComponent},
    {path:"sub-categories", component: SubCategoriesComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}