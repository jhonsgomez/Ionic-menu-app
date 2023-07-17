import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbePageRoutingModule } from './probe-routing.module';

import { ProbePage } from './probe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbePageRoutingModule
  ],
  declarations: [ProbePage]
})
export class ProbePageModule {}
