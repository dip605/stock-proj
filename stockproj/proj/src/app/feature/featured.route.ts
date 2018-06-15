import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';

import { InvestmentAnalyticsComponent } from './investment-analytics/investment-analytics.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import {bodyComponent} from '../body/body/body.component';

 const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: bodyComponent},
    { path: 'app', component: MainMenuComponent},
    { path: 'investment',   component: InvestmentAnalyticsComponent },
    { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class SecondaryRoutingModule { }
