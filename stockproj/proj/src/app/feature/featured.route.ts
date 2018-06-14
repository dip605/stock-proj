import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';

 const routes: Routes = [
    { path: 'MOJO', component: MainMenuComponent,}
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
