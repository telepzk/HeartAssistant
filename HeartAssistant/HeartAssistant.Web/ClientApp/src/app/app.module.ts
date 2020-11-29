import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AccountModule } from './account/account.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PollModule } from './poll/poll.module';
import { CodeDialogComponent } from './shared/code-dialog/code-dialog.component';
import { CodeDialogContentComponent } from './shared/code-dialog/code-dialog-content.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CodeDialogComponent,
    CodeDialogContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    AccountModule,
    PollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
