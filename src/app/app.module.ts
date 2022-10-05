import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import{ Camera } from '@awesome-cordova-plugins/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage-angular'
import { Drivers } from '@ionic/storage';
@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    IonicStorageModule.forRoot({
      name: 'mydb', 
      driverOrder: [ Drivers.IndexedDB, Drivers.LocalStorage ]
    }),

  ],
  providers: [
    CameraPreview,
    Camera,
    { 
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy 
    },
  ] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
