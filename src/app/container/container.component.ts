import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  ismove = false
  checkmove = false
  disnone = false
 move(){
  this.ismove = !this.ismove;
  this.checkmove = true
  this.disnone = true
  console.log('Move clicked! ismove:', this.ismove); // Debugging log
 }
 constructor(private router: Router) {}
 

 isWebDesignsRoute() {
 
 return this.router.url === '/WebDesigns';
 }

 isProjectsRoute() {
 
 /*WebDesigns*/ return this.router.url === '/Projects';
}
}
