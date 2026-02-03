import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';
import { NgpInput } from 'ng-primitives/input';
@Directive({
  selector: 'input[appFloatingLabelPin]',
  hostDirectives: [{ directive: NgpInput, inputs: ['disabled'] }],
  standalone: true
})
export class FloatingLabelPinDirective implements OnInit {
  @Input() label!: string;

  private labelElement!: HTMLLabelElement;
  private toggleButton!: HTMLButtonElement;
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const parent = this.renderer.createElement('div');
    this.renderer.addClass(parent, 'floating-label-pin-container');

    const input = this.el.nativeElement;
    input.type = 'password'; // default hidden

    this.renderer.insertBefore(input.parentNode, parent, input);
    this.renderer.appendChild(parent, input);

    // Create label
    this.labelElement = this.renderer.createElement('label');
    this.renderer.addClass(this.labelElement, 'floating-label');
    this.labelElement.innerText = this.label;
    this.renderer.appendChild(parent, this.labelElement);

    // Create toggle button
    this.toggleButton = this.renderer.createElement('button');
    this.renderer.addClass(this.toggleButton, 'pin-toggle');
    this.toggleButton.type = 'button';
    this.toggleButton.innerText = 'Show';
    this.renderer.appendChild(parent, this.toggleButton);

    // Toggle logic
    this.renderer.listen(this.toggleButton, 'click', () => {
      this.isVisible = !this.isVisible;
      input.type = this.isVisible ? 'text' : 'password';
      this.toggleButton.innerText = this.isVisible ? 'Hide' : 'Show';
    });

    // Initial state
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
