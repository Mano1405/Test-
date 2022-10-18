import { H0meComponent } from './h0me/h0me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:H0meComponent},
{ path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{path:'movies',

 loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
