import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { USER_PROVIDED_META_REDUCERS } from '@ngrx/store';
import * as LogRocket from 'logrocket';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// set reducer for logrocket.
const metaReducers = [
  createNgrxMiddleware(LogRocket),
];
export function getMetaReducers() {
  return metaReducers.concat([createNgrxMiddleware(LogRocket)]);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: USER_PROVIDED_META_REDUCERS,
      useFactory: getMetaReducers,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function createNgrxMiddleware(LogRocket: any) {
  throw new Error('Function not implemented.');
}

