import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
@Directive({
  selector: '[appPlayerName]',
})
export class PlayerNameDirective {

  constructor() { }

}
