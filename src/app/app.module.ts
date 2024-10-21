import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FirstMenuComponent } from './first-menu/first-menu.component';
import { SecondMenuComponent } from './second-menu/second-menu.component';
import { AdittionComponent } from './adittion/adittion.component';
import { BgComponent } from './bg/bg.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ProjectsComponent } from './projects/projects.component';
import { DesignsComponent } from './designs/designs.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FirstMenuComponent,
    SecondMenuComponent,
    AdittionComponent,
    BgComponent,
    CollapseComponent,
    ProjectsComponent,
    DesignsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
