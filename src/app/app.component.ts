import { Component } from '@angular/core';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
myObs$: any;
errors$: any;

  constructor(public formsManager: NgFormsManager) {
    this.myObs$ = formsManager.valueChanges('myForm', 'address.street');
   formsManager.errorsChanges('myForm', 'address.street').subscribe(
     console.log
   );
  }
}
