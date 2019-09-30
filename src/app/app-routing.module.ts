import { PackConfirmComponent } from './components/pack/pack-confirm/pack-confirm.component';
import { PackListComponent } from './components/pack/pack-list/pack-list.component';
import { OrderPackComponent } from './components/pack/order-pack/order-pack.component';
import { PickListItemByGroupComponent } from './components/pick/pick-list-item-by-group/pick-list-item-by-group.component';
import { PickListItemComponent } from './components/pick/pick-list-item/pick-list-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { LoginComponent } from './main-components/login/login.component';
import { PickListComponent } from './components/pick/pick-list/pick-list.component';

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
    path: 'pick-list',
    component: PickListComponent
  },
  {
    path: 'pick-list-item/:id',
    component: PickListItemComponent
  },
  {
    path: 'pick-list-item-by-group',
    component: PickListItemByGroupComponent
  }
  ,
  {
    path: 'order-pack',
    component: OrderPackComponent
  } ,
  {
    path: 'pack-list',
    component: PackListComponent
  }
  ,
  {
    path: 'pack-confirm/:id',
    component: PackConfirmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
