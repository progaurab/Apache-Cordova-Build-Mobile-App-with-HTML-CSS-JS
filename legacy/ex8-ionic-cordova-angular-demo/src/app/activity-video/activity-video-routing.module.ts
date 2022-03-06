import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityVideoPage } from './activity-video.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityVideoPageRoutingModule {}
