import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './Client/Layout/layout/layout.module';
import { LayoutComponent } from './Client/Layout/layout/layout.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: LayoutComponent,
      children: [
        {path: '', loadChildren:() => import('./Client/Pages/home/home.module').then(m=>m.HomeModule)},
        {path: 'chitiet', loadChildren:() => import('./Client/Pages/detailproduct/detailproduct.module').then(m=>m.DetailproductModule)},
        {path: 'loaihang', loadChildren:() => import('./Client/Pages/categoryproduct/categoryproduct.module').then(m=>m.CategoryproductModule)},


      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
