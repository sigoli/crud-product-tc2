import { FormProductComponent } from './form-product/form-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: FormProductComponent
  },
  {
    path: 'edit',
    component: FormProductComponent
  },
  {
    path: 'all',
    component: ListProductsComponent
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
