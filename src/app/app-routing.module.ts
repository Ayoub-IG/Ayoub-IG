import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
{path:"Projects",component:ProjectsComponent},
{path:"Webdesign",component:DesignsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
