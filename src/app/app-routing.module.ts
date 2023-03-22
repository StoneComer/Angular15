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
import { DataService } from './data.service';
import { AccessGuard } from './access.guard';
import { AccessAdminGuard } from './access-admin.guard';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{
  path: 'main',
  title: 'Главная страница',
  component: MainPageComponent
  },{
  path:'',
  redirectTo: 'main',
  pathMatch: 'full'
},
{
  path: 'catalog',
  title: 'Каталог товаров',
  component: CatalogComponent
},
{
  path:'catalog/:id',
  title: 'Страница товара',
  component: ProductPageComponent
},
{
  path:'auth',
  title: 'Вход',
  component: LoginComponent
},
{
  canActivate: [AccessGuard],
  path: 'profile',
  title: 'Личный кабинет',
  component: ProfileComponent,
  resolve: {
    res: DataService
  }
},
{
  canActivate:[AccessAdminGuard],
  path: 'admin',
  title: 'Администрирование',
  component: AdminComponent
},
{
  canActivate:[AccessAdminGuard],
  path: 'admin/items',
  title: 'Администрирование-товары',
  component: AdminProductsComponent
},
{
  canActivate:[AccessAdminGuard],
  path: 'admin/items/:id',
  title: 'Администрирование - Редактирование товара',
  component: AdminProductsEditComponent
},
{
  path:'**',
  title: 'Ошибка',
  component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
