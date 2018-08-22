import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './layout/main/main.component';
import {AuthComponent} from './login/auth/auth.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: './posts/posts.module#PostsModule'
  },

  // 萬用路由 (也可弄個 NotFoundComponent)
  {
    path: '**',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
