import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import ptBr from '@angular/common/locales/br';
import { registerLocaleData } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // for HttpClient use:
    LoadingBarHttpClientModule,

    // for Router use:
    LoadingBarRouterModule,

    // for Core use:
    LoadingBarModule,

    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
