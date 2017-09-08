import { Directive, ElementRef } from '@angular/core';


@Directive ({
  selector: '[appLogin]'
})
export class LoginDirective {
  dom: any = '';
  constructor(private el: ElementRef){
    console.log(el);
    this.dom = el.nativeElement;
  }
}
