import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ayoub-IG';
  ismove = false
  checkmove = false
  disnone = false
  isdisplay = false
showProjects: any;
isapp = false
iscompo = false


 move(){
  this.ismove = !this.ismove;
  this.checkmove = true
  this.disnone = true
  console.log('Move clicked! ismove:', this.ismove); // Debugging log
 }

 constructor(public router: Router) {} // Keep router available in the template



 currentUrl!: string;


 ngOnInit(): void {
   this.router.events.subscribe(() => {
     this.currentUrl = this.router.url;
   });
 }
}
