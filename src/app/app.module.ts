import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NasaPhotoOfTheDayComponent } from './nasa/nasa.POTD/nasa.POTD';

const appRoutes: Routes = [
  { path: 'PhotoOfTheDay', component: NasaPhotoOfTheDayComponent },
  { path: 'Home',      component: NasaPhotoOfTheDayComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  //{ path: '**', component: NasaPhotoOfTheDayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NasaPhotoOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
