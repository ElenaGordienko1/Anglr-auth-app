import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {}


  initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    this.theme = savedTheme || this.getSystemTheme();
    this.applyTheme();
  }


  private getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }


  private applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.theme === 'dark');
  }


  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
  }


  getTheme(): 'light' | 'dark' {
    return this.theme;
  }
}
