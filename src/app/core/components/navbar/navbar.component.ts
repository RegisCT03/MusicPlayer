import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() searchQuery = new EventEmitter<string>();
  searchTerm = '';

  clearSearch(): void {
    this.searchTerm = '';
    this.searchQuery.emit('');
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.searchQuery.emit(this.searchTerm);
      setTimeout(() => {
        this.searchTerm = '';
      }, 500);
    }
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}