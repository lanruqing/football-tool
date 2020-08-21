import { AuthGuard } from './../../auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerDetailFormComponent } from './player-detail-form/player-detail-form.component';
import {PlayerPanelComponent} from './player-panel/player-panel.component'
const routes: Routes = [{
  path:"index",
  component:PlayerPanelComponent,
},{
  path:'detail',
  component:PlayerDetailComponent,
},{
  path:"form",
  component:PlayerDetailFormComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerInfoRoutingModule { }
