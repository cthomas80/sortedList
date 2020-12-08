import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackbaseService} from './backbase.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule, 
    FontAwesomeModule,
    FormsModule,


    
  ],
  providers: [BackbaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
