import { Component, HostListener, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSidebarComponent, MainComponent],
  providers:[],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // Initialize with 0

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if we are in the browser and set the initial screenWidth
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Check if we are in the browser before accessing window
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      } else {
        this.isLeftSidebarCollapsed.set(false);
      }
    }
  }

  ngOnInit(): void {
    // Only set collapsed state if in browser
    if (isPlatformBrowser(this.platformId)) {
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
