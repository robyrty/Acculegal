import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';


const routes: Routes = [
  {
    path: '',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
   
   
   
  },
  // {
  //   path: 'tabs',
  //   component:TabsPage,
  //   children:[
  //     {
  //     path:'tab1',
  //     loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  //     },
  //     {
  //       path: 'tab2',
  //       loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  //     },
  //     {
  //       path: 'tab3',
  //       loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  //     },
    {
      path: 'app',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    }]
  // },
  // {
  //   path: '',
  //   redirectTo : 'tab4',
  //   pathMatch:'full'}
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// const routes: Routes = [    {
//   path: 'login',
//   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)   },   {
//   path: 'tabs',
//   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)   },      {
//   path : '',
//   redirectTo : 'login',
//   pathMatch : 'full'   } ];
