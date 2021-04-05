import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'activity-detail',
    loadChildren: () => import('./activity-detail/activity-detail.module').then( m => m.ActivityDetailPageModule)
  },
  {
    path: 'activity-video',
    loadChildren: () => import('./activity-video/activity-video.module').then( m => m.ActivityVideoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
