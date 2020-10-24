import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'monitoreo',
    loadChildren: () => import('./pages/monitoreo/monitoreo.module').then( m => m.MonitoreoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./pages/manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: 'temporizador',
    loadChildren: () => import('./pages/temporizador/temporizador.module').then( m => m.TemporizadorPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
