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



  // Menu
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Counter and Cart
  counter: number = 1;
  originalPrice: number = 250;
  salePrice: number = 125;
  cartItems: Array<any> = []; // Empty cart initially

  // Increment the counter
  increase(): void {
    this.counter++;
  }

  // Decrement the counter
  decrease(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  // Add to Cart
  addToCart(): void {
    const existingItemIndex = this.cartItems.findIndex(
      item => item.name === 'Fall Limited Edition Sneakers'
    );

    if (existingItemIndex > -1) {
      // Update the existing item quantity
      this.cartItems[existingItemIndex].quantity += this.counter;
    } else {
      // Add a new item to the cart
      this.cartItems.push({
        name: 'Fall Limited Edition Sneakers',
        price: this.salePrice,
        quantity: this.counter,
        image: 'image-product-1-thumbnail.jpg'
      });
    }
   
  }

  // Calculate total price
  get totalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Cart logic
  isCartOpen: boolean = false;

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  checkout(): void {
    alert('Proceeding to checkout...');
  }

  removeItem(itemToRemove: any): void {
    const itemIndex = this.cartItems.findIndex(item => item === itemToRemove);
  
    if (itemIndex > -1) {
      // Decrease the quantity of the item
      this.cartItems[itemIndex].quantity--;
  
      // Remove the item from the cart if the quantity reaches 0
      if (this.cartItems[itemIndex].quantity === 0) {
        this.cartItems.splice(itemIndex, 1);
      }
    }
  }
}
