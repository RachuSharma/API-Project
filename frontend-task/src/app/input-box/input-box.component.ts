import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  prompt = '';
  @Output() generate = new EventEmitter<string>();

  emitPrompt() {
    this.generate.emit(this.prompt);
  }
}
