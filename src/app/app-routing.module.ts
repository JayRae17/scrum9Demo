import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'myevents',
    loadChildren: () => import('./pages/myevents/myevents.module').then( m => m.MyeventsPageModule)
  },
  {
    path: 'createvent',
    loadChildren: () => import('./pages/createvent/createvent.module').then( m => m.CreateventPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'edit-event',
    loadChildren: () => import('./pages/edit-event/edit-event.module').then( m => m.EditEventPageModule)
  },

  // GABBY
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'viewuser',
    loadChildren: () => import('./pages/viewuser/viewuser.module').then( m => m.ViewuserPageModule)
  },
  // GABBY


  // DIANDRA
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
  // DIANDRA
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
