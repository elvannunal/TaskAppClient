import { FormGroup, FormControl } from '@angular/forms';
import {
  Input,
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth-service';
import { DataSharedService } from '../../../../services/data-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isShowPassword: boolean = false;
  password: any;
  isLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public cdr: ChangeDetectorRef,
    public dataSendService:DataSharedService
  ) {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      rememberMe: new FormControl(false),
    });
  }

  ngOnInit(): void {
    const storedCredentials = this.authService.getStoredCredentials();
    if (storedCredentials) {
      this.form.patchValue({
        username: storedCredentials.username,
        password: storedCredentials.password,
        rememberMe: true,
      });
    }
  }
  submit() {
    if (this.form.valid) {
      const { username, password, rememberMe } = this.form.value;
      const data = { username, password };

      this.authService.Login(data).subscribe({
        next: (res) => {
          if (res && res.token) {
            this.isLogin = true;
            this.dataSendService.changeData(this.isLogin)
            if (rememberMe) {
              this.authService.storeCredentials(username, password);
            } else {
              this.authService.clearCredentials();
            }
            this.authService.storeToken(res.token);
            this.cdr.detectChanges();

          } else {
            console.log('Token found in response');
            this.isLogin = false;
            this.dataSendService.changeData(this.isLogin)
          }
        },
        error: (err) => {
          console.error('Login failed', err);
          this.dataSendService.changeData(this.isLogin)
        },
      });
    }
  }

  togglePasswordVisibility() {
    this.isShowPassword = !this.isShowPassword;
  }
  routeRegister() {
    this.router.navigate(['/register']);
  }
}
