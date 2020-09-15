import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') status: boolean;

  constructor() { }

  @HostListener('click') onClick(){
    this.status = !this.status 
  }
}
