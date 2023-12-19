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
        {path: 'page404', loadChildren:() => import('./Client/Pages/page404/page404.module').then(m=>m.Page404Module)},
        {path: 'blog', loadChildren:() => import('./Client/Pages/blog/blog.module').then(m=>m.BlogModule)},

      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
