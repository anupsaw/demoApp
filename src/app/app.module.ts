import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { MyIfDirective } from './directive/structural/my-if.directive';
import { HighlightTextDirective } from './directive/attribute/highlight-text.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { DataService } from './services//data.service';
import { UserService } from './services/user.service';


import { MyTableModule } from './my-table/my-table.module';
import { MyTableOverrideService } from './services/my-table-override.service';
import { MyTableHook } from './my-table/my-table.Abstract';
import { LayoutModule } from './layout';
import { UsersModule } from './users';

import { AppRouterModule, RoutingComponents } from './app.router';
import { CasePipe } from './pipe/case.pipe';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RoutePreLoadStrategy } from './app.route.load.service';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MyIfDirective,
    HighlightTextDirective,
    ViewchildComponent,
    RoutingComponents,
    CasePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MyTableModule,
    UsersModule,
    LayoutModule,
    AppRouterModule
  ],
  providers: [DataService, UserService, RoutePreLoadStrategy, { provide: MyTableHook, useClass: MyTableOverrideService }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
