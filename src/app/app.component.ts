import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {

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

  // Counter for the number of shoes
  counter: number = 1; // Default counter value to 1 (can be 0 or any other value)

  // Price details
  originalPrice: number = 250; // Original price (usual price)
  salePrice: number = 125; // Sale price (discounted price)

  // Cart data (to reflect quantity based on counter)
  cartItems: Array<any> = [
    { name: 'Shoe', price: this.salePrice, quantity: this.counter, image: 'image-product-1-thumbnail.jpg' },
  ];

  // Increment the counter and update the cart's quantity
  increase(): void {
    this.counter++;
    this.updateCart(); // Update the cart's quantity based on the counter
  }

  // Decrement the counter and update the cart's quantity
  decrease(): void {
    if (this.counter > 0) {
      this.counter--;
      this.updateCart(); // Update the cart's quantity based on the counter
    }
  }

  // Update cart with the current quantity from the counter
  updateCart(): void {
    this.cartItems = [
      { name: 'Fall Limited Edition Sneakers', price: this.salePrice, quantity: this.counter, image: 'image-product-1-thumbnail.jpg' },
    ];
  }

  // Getter for calculating total price based on the sale price
  get totalPrice(): number {
    return this.salePrice * this.counter; // Calculate total price based on the number of shoes
  }

  // Cart logic
  isCartOpen: boolean = false; // Track whether the cart modal is open or closed

  // Toggle the cart modal visibility
  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  // Close the cart modal
  closeCart(): void {
    this.isCartOpen = false;
  }

  // Proceed to checkout (you can redirect to a checkout page or handle it here)
  checkout(): void {
    alert('Proceeding to checkout...');
    // Redirect to checkout page or handle checkout logic here
  }
}
