import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
