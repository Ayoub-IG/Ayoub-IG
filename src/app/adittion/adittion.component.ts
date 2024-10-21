import { Component } from '@angular/core';

@Component({
  selector: 'app-adittion',
  templateUrl: './adittion.component.html',
  styleUrl: './adittion.component.css'
})
export class AdittionComponent {
  ismove = false
  isteen= false
  handleclick(){
    this.ismove = !this.ismove
    this.isteen = !this.isteen
  }
}
