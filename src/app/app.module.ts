import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
     
        apiKey: "AIzaSyBsdLTbK1tyeddXkJE3fASVxwx8AwKV4CQ",
        authDomain: "my-project-1493325606788.firebaseapp.com",
        databaseURL: "https://my-project-1493325606788.firebaseio.com",
        projectId: "my-project-1493325606788",
        storageBucket: "my-project-1493325606788.appspot.com",
        messagingSenderId: "29573432372",
        appId: "1:29573432372:web:8cecfaed954c060b"
    
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
