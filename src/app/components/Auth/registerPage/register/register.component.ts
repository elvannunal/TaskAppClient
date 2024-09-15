import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth-service';
import { RegisterModel } from '../../../../models/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public responseRegister:any;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  @Output() submitEM = new EventEmitter();

  ngOnInit(): void {}

  constructor(public authService:AuthService,public router:Router) {


  }

  submit() {
    if (this.form.valid) {
      let newUser = new RegisterModel(
        this.form.value.username,
        this.form.value.email,
        this.form.value.password
      );
      this.authService.Register(newUser).subscribe({
        next:(res)=>{debugger
          this.responseRegister=res;
          if(res=== true){
            this.router.navigate(['/login']);
          }
          console.log("-->",this.responseRegister);
        },error:(error)=>{
          console.log("err:",error)
        }
      })
    }
  }

  routeLogin() {
    this.router.navigate(['/login']);
  }

}
