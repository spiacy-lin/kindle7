import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAnalyticsModule, AngularFireAnalytics} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {UserComponent} from './user.component';
import {routing} from './app.routing';
import {UserFormComponent} from './user-form.component';
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';
import { SignupComponent } from './signup.component';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    routing,
    AngularFireAuthModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
