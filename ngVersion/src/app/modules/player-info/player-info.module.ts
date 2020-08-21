import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerInfoRoutingModule } from './player-info-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { PlayerDetailFormComponent } from './player-detail-form/player-detail-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [PlayerListComponent, PlayerDetailComponent, PlayerPanelComponent, PlayerDetailFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayerInfoRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PlayerInfoModule { }
