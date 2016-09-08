import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
