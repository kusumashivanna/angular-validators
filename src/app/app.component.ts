import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { upperCaseValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-validators';
  form!: FormGroup;
  binding = 'hello';
  submitted: boolean = false;
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      fname: ['hello', [Validators.required, upperCaseValidator()]],
    });
  }
  getData($event: any) {
    console.log($event, 'parent');
  }
  getData1() {
    console.log(this.form.controls['fname']);
  }
  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
    }
    console.log(this.form.controls['fname']);
  }
}
