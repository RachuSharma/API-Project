import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  createFromScratch() {
    console.log(' Create from scratch clicked');
  }
  
  generateCaptions() {
    console.log(' Generate captions clicked');
  }
  
}
