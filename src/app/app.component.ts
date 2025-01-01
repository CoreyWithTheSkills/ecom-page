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


// SlideShow
images: string[] = [
  'image-product-1.jpg',
  'image-product-2.jpg',
  'image-product-3.jpg',
  'image-product-4.jpg'
];

// Track the current index
currentIndex: number = 0;

// Getter for the current image
get currentImage(): string {
  return this.images[this.currentIndex];
}

// Navigate to the previous image
prevImage(): void {
  this.currentIndex =
    this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
}

// Navigate to the next image
nextImage(): void {
  this.currentIndex =
    this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
}



}