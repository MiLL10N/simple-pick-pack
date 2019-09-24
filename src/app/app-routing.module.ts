import { PickListItemComponent } from './pick-list-item/pick-list-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { PackingComponent } from './packing/packing.component';
import { PickListComponent } from './pick-list/pick-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'order-list',
    component: OrderListComponent
  },
  {
    path: 'packing',
    component: PackingComponent
  },
  {
    path: 'pick-list',
    component: PickListComponent
  },
  {
    path: 'pick-list-item/:id',
    component: PickListItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
