import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { MyIfDirective } from './directive/structural/my-if.directive';
import { HighlightTextDirective } from './directive/attribute/highlight-text.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { DataService } from './services//data.service';

import { MyTableModule } from './my-table/my-table.module';
import { MyTableOverrideService } from './services/my-table-override.service';
import { MyTableHook } from './my-table/my-table.Abstract';
import { LayoutModule } from './layout';
import { UsersModule } from './users';

import { AppRouterModule, RoutingComponents } from './app.router';
import { CasePipe } from './pipe/case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MyIfDirective,
    HighlightTextDirective,
    ViewchildComponent,
    RoutingComponents,
    CasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyTableModule,
    UsersModule,
    LayoutModule,
    AppRouterModule
  ],
  providers: [DataService, { provide: MyTableHook, useClass: MyTableOverrideService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
