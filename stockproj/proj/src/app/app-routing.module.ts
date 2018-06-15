import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bodyComponent } from './body/body/body.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: 'app', loadChildren: './feature/feature.module#FeatureModule' }
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