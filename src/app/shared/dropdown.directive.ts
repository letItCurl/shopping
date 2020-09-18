import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective { 
  @HostBinding('class.open') status: boolean;
  @HostListener('click') onClick(){
    this.status = !this.status
  }
  constructor() { }
}
