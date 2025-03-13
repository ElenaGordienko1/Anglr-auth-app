import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme/theme.service';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-auth-app';
    constructor(private themeService: ThemeService) {
      this.themeService.initializeTheme();
    }
}

