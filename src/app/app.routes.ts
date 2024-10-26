import { Routes } from '@angular/router';
import { FlowersCreatePageComponent } from './pages/flowers-create-page/flowers-create-page.component';
import { FlowersEditPageComponent } from './pages/flowers-edit-page/flowers-edit-page.component';
import { FlowersListPageComponent } from './pages/flowers-list-page/flowers-list-page.component';

export const routes: Routes = [
  {
    path: 'flowers',
    component: FlowersListPageComponent,
  },
  { path: 'flowers/create', component: FlowersCreatePageComponent },
  { path: 'flowers/:flowerId/edit', component: FlowersEditPageComponent },
  { path: '**', redirectTo: '/flowers' },
];
