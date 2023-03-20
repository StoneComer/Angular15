import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductsEditComponent } from './admin-products-edit/admin-products-edit.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminProductsEditComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [LoginComponent,ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
