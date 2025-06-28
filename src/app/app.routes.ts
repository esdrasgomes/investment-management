import { Routes } from '@angular/router';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetEditComponent } from './components/asset-edit/asset-edit.component';
import { AssetLoginComponent } from './components/asset-login/asset-login.component';


export const routes: Routes = [
  { path: 'login', component: AssetLoginComponent },
  { path: 'assets', component: AssetListComponent },
  { path: 'assets/new', component: AssetEditComponent },
  { path: 'assets/edit/:id', component: AssetEditComponent },
  { path: '', redirectTo: 'assets', pathMatch: 'full' },
];
