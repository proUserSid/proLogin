import {
  Directive,
  ElementRef,
  HostListener,
  QueryList,
  ContentChildren,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Directive({
  selector: '[appInvalidFocusField]',
})
export class InvalidFocusFieldDirective {
  @ContentChildren(NgModel, { descendants: true, read: ElementRef })
  inputFields: QueryList<ElementRef> | any;

  @ContentChildren(NgModel, { descendants: true })
  ngModles: QueryList<NgModel> | any;

  constructor(private _ngForm: NgForm) {}

  @HostListener('ngSubmit')
  onSubmit() {
    if (this._ngForm.valid) return;

    this._ngForm.control.markAllAsTouched();

    for (let i = 0; i < this.ngModles.length; i++) {
      if (this.ngModles.get(i).control.errors) {
        this.inputFields.get(i).nativeElement.focus();
        break;
      }
    }
  }
}
