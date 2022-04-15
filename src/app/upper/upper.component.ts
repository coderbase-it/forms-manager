import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css'],
})
export class UpperComponent implements OnInit, OnDestroy {
  form: FormGroup;
  simpleform: FormGroup;

  constructor(private fb: FormBuilder, private formsManager: NgFormsManager) {
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      address: this.fb.group({
        street: this.fb.control('', Validators.required),
        city: this.fb.control('', Validators.required),
      }),
    });

    this.formsManager.upsert('myForm', this.form);

    this.simpleform = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
    });
  }

  get address() {
    return this.form.get('address') as FormGroup;
  }

  ngOnInit() {
    this.form
      .get('address')
      .get('street')
      .valueChanges.subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe('myForm');
  }
}
