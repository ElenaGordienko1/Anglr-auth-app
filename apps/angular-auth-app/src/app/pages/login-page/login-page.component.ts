import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'; 
import { ThemeToggleComponent } from '../../common-ui/theme/theme-toggle.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ThemeToggleComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  isLoading = signal(false);
  emailTouched = signal(false);
  passwordTouched = signal(false);
  emailFocused = signal(false);
  passwordFocused = signal(false);

  constructor(private authService: AuthService) {} 


  passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*]/.test(value);

    if (!hasUpperCase || !hasNumber || !hasSpecialChar) {
      return { passwordStrength: true };
    }
    return null;
  };

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      this.passwordValidator
    ])
  });

  getEmailError(): string | null {
    const control = this.form.get('email');
    if (!control || !this.emailTouched()) return null;

    if (control.hasError('required')) return 'Some error';
    if (control.hasError('email')) return 'Some error';

    return null;
  }

  getPasswordError(): string | null {
    const control = this.form.get('password');
    if (!control || !this.passwordTouched()) return null;

    if (control.hasError('required')) return 'Some error';
    if (control.hasError('minlength')) return 'Some error';
    if (control.hasError('passwordStrength')) return 'Some error';

    return null;
  }

  onInput(field: 'email' | 'password') {
    if (field === 'email') {
      this.emailTouched.set(true);
    }
    if (field === 'password') {
      this.passwordTouched.set(true);
    }
  }

  onSubmit() {
    this.emailTouched.set(true);
    this.passwordTouched.set(true);

    if (this.form.invalid) return;

    this.isLoading.set(true);

    const { email, password } = this.form.getRawValue();

    this.authService.login({ email: email ?? '', password: password ?? '' }).subscribe({ 
      next: (response: any) => {
        console.log(`Welcome, ${response.user.name}!`);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }
}
