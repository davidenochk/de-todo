import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from "@angular/router";
import "hammerjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthService } from "./services/auth.service";
import { AccountService } from "./services/account.service";
import { ChttpService } from "./services/chttp.service";
import { StorageService } from "./services/storage.service";
import { LoaderService } from "./components/loader/loader.service";
import { fwHttpServiceFactory } from "./services/auth-service-factory";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardService } from "./dashboard/dashboard.service";
import { AuthGuard } from "./services/auth.guard";
import { NavigateService } from "./services/navigate.service";
import { DEInputComponent } from './components/de-input/de-input.component';
import { DEAddTodoComponent } from './components/de-add-todo/de-add-todo.component';
import { TodoDialogComponent } from "./dashboard/todo-dialog/todo-dialog.component";
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    LoaderComponent,
    HeaderComponent,
    DashboardComponent,
    NotFoundComponent,
    DEInputComponent,
    DEAddTodoComponent,
    TodoDialogComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    TodoDialogComponent
  ],
  providers: [
    AuthService,
    ChttpService,
    StorageService,
    LoaderService,
    {
      provide: ChttpService,
      useFactory: fwHttpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService, Router]
    },
    DashboardService,
    AuthGuard,
    NavigateService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
