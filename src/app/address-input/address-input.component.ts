import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css'],
})
export class AddressInputComponent implements OnInit {
  @Input() form: FormGroup = this.fb.group({
    street: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
