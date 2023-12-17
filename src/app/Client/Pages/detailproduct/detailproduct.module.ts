import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailproductComponent } from '../detailproduct/detailproduct.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DetailproductComponent}
   ])],
   exports: [RouterModule]
})
export class DetailproductModule { }
