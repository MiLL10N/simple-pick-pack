import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main-components/menu/menu.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { PickListComponent } from './components/pick/pick-list/pick-list.component';
import { LoginComponent } from './main-components/login/login.component';
import { LoadingScreenComponent } from './main-components/loading-screen/loading-screen.component';
import { PickListItemComponent } from './components/pick/pick-list-item/pick-list-item.component';
import { PickListItemByGroupComponent } from './components/pick/pick-list-item-by-group/pick-list-item-by-group.component';
import { OrderPackComponent } from './components/pack/order-pack/order-pack.component';
import { PackListComponent } from './components/pack/pack-list/pack-list.component';
import { PackConfirmComponent } from './components/pack/pack-confirm/pack-confirm.component';
import { DocumentPrintingComponent } from './components/pack/document-printing/document-printing.component';
import { PostConfirmListComponent } from './components/clear/post-confirm-list/post-confirm-list.component';
import { ClearListComponent } from './components/clear/clear-list/clear-list.component';
import { PackageStockComponent } from './components/pack/package-stock/package-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderListComponent,
    PickListComponent,
    LoginComponent,
    LoadingScreenComponent,
    PickListItemComponent,
    PickListItemByGroupComponent,
    OrderPackComponent,
    PackListComponent,
    PackConfirmComponent,
    DocumentPrintingComponent,
    PostConfirmListComponent,
    ClearListComponent,
    PackageStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
