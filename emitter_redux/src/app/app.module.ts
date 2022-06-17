import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterComponent } from './emitter/emitter.component';
import { ReduxComponent } from './redux/redux.component';
import { EmitterFilhoComponent } from './emitter/emitter-filho/emitter-filho.component';
import { ReduxFilhoComponent } from './redux/redux-filho/redux-filho.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmitterComponent,
    ReduxComponent,
    EmitterFilhoComponent,
    ReduxFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
