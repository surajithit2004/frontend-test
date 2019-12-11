import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchFilterPipe, ItemDetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,AlertModule.forRoot(), Ng2SearchPipeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
