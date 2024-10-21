import { Component , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first-menu',
  templateUrl: './first-menu.component.html',
  styleUrl: './first-menu.component.css'
})
export class FirstMenuComponent {
  l = ["Experienced In basic web development languages [HTML, CSS, JAVASCRIPT]" ,
    "Experienced Also in it Frame-works [React js, Angular js, Next js , ext.... ]",  
  "Also with an great web designing!"
  ]
  IN = false
  INR = true
  ismove = false
  @Input() text: any;

  @Output() textChange = new EventEmitter<void>(); // Event emitter to notify parent
sec: string|any[]|null|undefined;
  onButtonClick() {
    this.textChange.emit();  // Notify the parent to toggle the value
    console.log('Button clicked!');  
  }
}
