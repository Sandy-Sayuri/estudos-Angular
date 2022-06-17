import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmitterComponent } from './emitter/emitter.component';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  { path: 'emitter', component: EmitterComponent },
  { path: 'redux', component: ReduxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
