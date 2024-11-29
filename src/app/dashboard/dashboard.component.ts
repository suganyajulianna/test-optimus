import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for navigation
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  notifications: string[] = [];
  
  // Inject Router service
  constructor(private router: Router) {}

  // Add notification to the queue
  showNotification(message: string) {
    this.notifications.push(message);

    // Auto-remove the notification after 3 seconds
    setTimeout(() => {
      this.notifications.shift();
    }, 300000000); // Reduced time for demonstration
  }

  // Manually close notification
  closeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  // Trigger notifications
  triggerNotifications() {
    this.showNotification('Hazard Warnings.');

    // Create a notification object (Browser Notification or any custom notification)
    const notification = new Notification('Hazard Warnings.');

    // Define the click event of the notification
    notification.onclick = () => {
      // Navigate to the other page when notification is clicked
      this.router.navigate(['/scenario']); // Replace '/target-route' with your actual route
    };
  }
}
