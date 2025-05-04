import { Component } from '@angular/core';
import { InputBoxComponent } from './input-box/input-box.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ActionsComponent } from './actions/actions.component';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputBoxComponent, SuggestionsComponent, ActionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response = '';
  prompt = '';
  http = inject(HttpClient);

  suggestions = [
    { icon: '📢', title: 'Promotional' },
    { icon: '🚀', title: 'Product launch' },
    { icon: '❤️', title: 'Get Engagement' },
    { icon: '🏷️', title: 'Announce a sale' }
  ];

  isLoading = false;

  generateTopic(prompt: string) {
    this.prompt = prompt;
  
    if (!prompt.trim()) {
      this.response = 'Please enter a topic.';
      return;
    }
  
    this.isLoading = true;
    console.log('🔄 isLoading....');

  
    this.http.post<{ reply: string }>('http://localhost:3000/askAi', {
      message: prompt
    }).subscribe({
      next: (res) => {
        this.response = res.reply;
        this.isLoading = false;
      },
      error: (err) => {
        this.response = 'Something went wrong.';
        this.isLoading = false;
        console.log('✅ isLoading  false');

      }
    });
  }
  

  selectSuggestion(title: string) {
    this.generateTopic(title);
  }
}
