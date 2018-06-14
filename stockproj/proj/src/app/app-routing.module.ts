import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { bodyComponent } from './body/body/body.component';
import { InvestmentAnalyticsComponent } from './feature/investment-analytics/investment-analytics.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: '', component: bodyComponent },
  { path: 'app',   redirectTo: '/MOJO', pathMatch: 'full'},
  { path: 'MOJO/investment',   component: InvestmentAnalyticsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}