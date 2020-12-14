import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './user.reducer';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
