import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';

/**
 *
 * extend this class when you need a subform. When you use it, add the following to your subform component:
 * @Component({
 *  providers: [
 *      {
 *          provide: NG_VALUE_ACCESSOR,
 *          useExisting: forwardRef(() => *COMPONENT_CLASS*),
 *          multi: true
 *      }
 *  ],
 *  ...
 */
export abstract class SubForm implements ControlValueAccessor, Validator {
  form: FormGroup;

  public onTouched(): void {}

  public writeValue(value: any): void {
    if (value) {
      this.form.patchValue(value, { emitEvent: true });
      this.onTouched();
    }
  }

  public registerOnChange(fn: (x: any) => void): void {
    this.form.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    let res = {}
    Object.keys(this.form.controls).forEach((name) => {
      if (this.form.get(name).errors){
        res[name] = this.form.get(name).errors
      }
    
    })
    return this.form.valid ? null : res;
    //return { subformError : 'Problem with subform'}
  }

  registerOnValidatorChange(fn: () => void): void {
    this.form.statusChanges.subscribe(fn);
  }
}
