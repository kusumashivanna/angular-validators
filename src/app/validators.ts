import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function upperCaseValidator(): ValidatorFn {
  return (controls: AbstractControl): ValidationErrors | null => {
    const value = controls.value;
    if (!/^[A-Z]+$/.test(value)) {
      return { uppercase: true };
    } else {
      return null;
    }
    return null;
  };
}
