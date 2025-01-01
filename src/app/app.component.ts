import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
  standalone: true, // Ensure the component is standalone
  imports: [CommonModule], // Import CommonModule here
})
export class AppComponent {
  // Track whether the menu is open or not
  isMenuOpen = false;

  // Method to toggle menu state
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Method to close the menu when a link is clicked
  closeMenu(): void {
    this.isMenuOpen = false;
}
}