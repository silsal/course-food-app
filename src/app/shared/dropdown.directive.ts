import {
  Directive,
  HostListener,
  HostBinding,
  Renderer2,
  ContentChild} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(
    private renderer: Renderer2
  ) { }

  @ContentChild('menu', { static: false }) menu;
  @HostBinding('class.show') show = false;
  @HostListener('click') onClick() {
    this.show = !this.show;

    if (this.show) {
      this.renderer.addClass(this.menu.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.menu.nativeElement, 'show');
    }
  }

}
