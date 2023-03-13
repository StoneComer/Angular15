import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { Comments2Component } from './comments2/comments2.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { AccessRoleGuard } from './access-role.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'comments',
    component: CommentsListComponent,
    //canActivateChild: [AccessRoleGuard],
      children: [
        {
          path: '1',
          component: CommentsComponent
        },
        {
          path: '2',
          component: Comments2Component
        }
      ]
  },
  {
    canActivate: [AccessRoleGuard],
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '',
    redirectTo:'comments',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
