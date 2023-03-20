import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductsEditComponent } from './admin-products-edit/admin-products-edit.component';

const routes: Routes = [{
  path: 'main',
  component: MainPageComponent
  },{
  path:'',
  redirectTo: 'main',
  pathMatch: 'full'
},
{
  path: 'catalog',
  component: CatalogComponent
},
{
  path:'catalog/:id',
  component: ProductPageComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'admin-products',
  component: AdminProductsComponent
},
{
  path: 'admin-products-edit',
  component: AdminProductsEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
