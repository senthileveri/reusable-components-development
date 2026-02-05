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

    // Inject directive-specific CSS once
    this.injectStyles();

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

  private injectStyles() {
    const style = this.renderer.createElement('style');
    style.textContent = `

      .floating-label-container {
        position: relative;
        width: var(--fullWidth);
        display: flex;
        align-items: center;
      }

      .floating-label-container input {
        border: 1px solid var(--steelGray);
        border-radius: 4px;
        padding: 14px 10px 6px 10px; /* extra top padding for label space */
        width: var(--fullWidth);
        outline: none;
        font-size: var(--fontSize16);
      }

      .floating-label-container input:focus {
        border-color: var(--shuttleGray);
      }

      .floating-label {
        position: absolute;
        left: var(--space12);
        top: auto;
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


    `;
    document.head.appendChild(style);
  }
}
