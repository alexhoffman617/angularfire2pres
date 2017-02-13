import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire} from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

export const firebaseConfig = {
    apiKey: "AIzaSyAxb2bqyFPng5Tee0MZrHZ5PbACPN2_zCg",
    authDomain: "angularfire2demo.firebaseapp.com",
    databaseURL: "https://angularfire2demo.firebaseio.com",
    storageBucket: "angularfire2demo.appspot.com",
    messagingSenderId: "1088505020716"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  remember: 'default', 
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
}
