import { Directive, HostBinding, HostListener, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightText]'
})
export class HighlightTextDirective implements OnInit {

  @Input() highlightText: string;
  constructor(private elRef: ElementRef) {
    // you can do all operation with navtive element just like javascript;
    this.elRef.nativeElement.addEventListener('click', function () {
      console.log('click');
    });
  }



  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    this.bgColor = 'green';
    this.updateTextColor('red');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.bgColor = this.highlightText || 'yellow';
    this.updateTextColor('red');
    this.updateTextColor('green');
  }

  ngOnInit() {
    this.bgColor = this.highlightText || 'yellow';

  }

  private updateTextColor(color: string) {
    this.elRef.nativeElement.style.color = color;

  }

}
