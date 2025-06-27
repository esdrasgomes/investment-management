import { Routes } from '@angular/router';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';

export const routes: Routes = [
  { path: 'assets', component: AssetListComponent },
  { path: 'assets/new', component: AssetEditComponent },
  { path: 'assets/edit/:id', component: AssetEditComponent },
  { path: '', redirectTo: 'assets', pathMatch: 'full' },
];
