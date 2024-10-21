import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.css'
})
export class CollapseComponent {
  @Input() pros: any; // Type changed to string
  @Input() prost: any; // Type changed to string
  @Input() prosth: any; // Type changed to string
  @Input() carouselId: any; // Type changed to string
}
