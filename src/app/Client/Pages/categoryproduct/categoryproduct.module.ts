import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryproductComponent } from './categoryproduct.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: CategoryproductComponent}
   ])],
   exports: [RouterModule]
})
export class CategoryproductModule { }
