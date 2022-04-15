import { Component, forwardRef } from '@angular/core';
import { SubForm } from '../sub-form';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
})
export class AddressComponent extends SubForm {
  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      street: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
    });
  }
}
