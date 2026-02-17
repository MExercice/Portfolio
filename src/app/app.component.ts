import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
    template: `
    <app-header></app-header>
    <main class="content-container">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
    styles: [`
    .content-container {
      min-height: calc(100vh - 140px); // Subtract header and footer approx height
      padding-top: 2rem;
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {
    title = 'portfolio';
}
