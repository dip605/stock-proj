import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ApiCallingService} from './api-calling.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [ApiCallingService]
})
export class CoreModule { }
