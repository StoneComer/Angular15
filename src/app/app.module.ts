import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';
import { Comments2Component } from './comments2/comments2.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentsListComponent,
    ErrorComponent,
    Comments2Component,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [DataService, AccessRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
