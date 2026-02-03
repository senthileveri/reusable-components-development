import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appFloatingLabel]',
  standalone: true
})
export class FloatingLabelDirective implements OnInit {
  @Input() label!: string;
  private labelElement!: HTMLLabelElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const parent = this.renderer.createElement('div');
    this.renderer.addClass(parent, 'floating-label-container');

    const input = this.el.nativeElement;
    this.renderer.insertBefore(input.parentNode, parent, input);
    this.renderer.appendChild(parent, input);

    this.labelElement = this.renderer.createElement('label');
    this.renderer.addClass(this.labelElement, 'floating-label');
    this.labelElement.innerText = this.label;

    this.renderer.appendChild(parent, this.labelElement);

    if (input.value) {
      this.renderer.addClass(this.labelElement, 'active');
    }
  }

  @HostListener('focus')
  onFocus() {
    this.renderer.addClass(this.labelElement, 'active');
  }

  @HostListener('blur')
  onBlur() {
    if (!this.el.nativeElement.value) {
      this.renderer.removeClass(this.labelElement, 'active');
    }
  }
}
