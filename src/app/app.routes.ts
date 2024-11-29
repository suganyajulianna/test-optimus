import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { LoginComponent } from './login/login.component';
import { AddLocationComponent } from './add-location/add-location.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'scenario', component: ScenarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-location', component: AddLocationComponent },
  ];
