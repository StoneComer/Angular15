import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [{
  path: 'main',
  component: MainPageComponent
  },{
  path:'',
  redirectTo: 'main',
  pathMatch: 'full'
},
{
  path:'catalog/:id',
  component: ProductPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
