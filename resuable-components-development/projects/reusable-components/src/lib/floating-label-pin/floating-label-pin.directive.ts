import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appFloatingLabelPin]',
  standalone: true,
})
export class FloatingLabelPinDirective implements OnInit {
  @Input() label!: string;

  private labelElement!: HTMLLabelElement;
  private toggleButton!: HTMLButtonElement;
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {

    // Inject directive-specific CSS once
    this.injectStyles();
    
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

  private injectStyles() {
    const style = this.renderer.createElement('style');
    style.textContent = `

      .floating-label-pin-container {
        position: relative;
        width: var(--fullWidth);
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .floating-label-pin-container input {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 14px 40px 6px 10px; /* space for toggle button */
        /* width: 100%; */
        font-size: var(--fontSize16);
        outline: none;
      }

      .floating-label-pin-container input:focus {
        border-color: var(--shuttleGray);
      }

      .floating-label {
        position: absolute;
        left: var(--fontSize12);
        top: auto;
        /* top: 12px; */
        color: #777;
        font-size: var(--fontSize16);
        transition: all 0.1s ease-out;
        transition-property: transform;
        pointer-events: none;
      }

      .floating-label.active {
        top: 2px;
        font-size: var(--fontSize12);
        color: var(--midnightGray);
      }

      .pin-toggle {
        position: absolute;
        background: none;
        border: none;
        color: var(--seaBlue);
        cursor: pointer;
        font-family: var(--fontFamily);
        font-size: var(--fontSize14);
        font-style: normal;
        font-weight: var(--strong);
      }


    `;
    document.head.appendChild(style);
  }
}
