import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from  '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
