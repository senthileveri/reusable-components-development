import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appPinEntry]',
  standalone: true
})
export class PinEntryDirective implements OnInit {
  @Input() length: number = 4; // default 4 digits
  @Input() theme: 'light' | 'dark' = 'light'; // theme switch
  @Output() pinEntered = new EventEmitter<string>();

  private svgCircles: SVGSVGElement[] = [];
  private values: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {

    // Inject directive-specific CSS once
    this.injectStyles();

    const parent = this.renderer.createElement('div');
    this.renderer.addClass(parent, 'pin-svg-container');
    this.renderer.addClass(parent, this.theme === 'dark' ? 'dark-theme' : 'light-theme');

    // Remove original input
    const originalInput = this.el.nativeElement;
    this.renderer.insertBefore(originalInput.parentNode, parent, originalInput);
    this.renderer.removeChild(originalInput.parentNode, originalInput);

    // Hidden input to capture actual value
    const hiddenInput = this.renderer.createElement('input');
    this.renderer.setAttribute(hiddenInput, 'type', 'tel');
    this.renderer.setStyle(hiddenInput, 'opacity', '0');
    this.renderer.setStyle(hiddenInput, 'position', 'absolute');
    this.renderer.setStyle(hiddenInput, 'pointer-events', 'none');
    this.renderer.appendChild(parent, hiddenInput);

    // Create SVG circles
    for (let i = 0; i < this.length; i++) {
      const svg = this.renderer.createElement('svg', 'svg');
      this.renderer.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
      this.renderer.setAttribute(svg, 'width', '40');
      this.renderer.setAttribute(svg, 'height', '40');
      this.renderer.setAttribute(svg, 'viewBox', '0 0 24 24');

      const circle = this.renderer.createElement('circle', 'svg');
      this.renderer.setAttribute(circle, 'cx', '12');
      this.renderer.setAttribute(circle, 'cy', '12');
      this.renderer.setAttribute(circle, 'r', '9.5');

      // Stroke color depends on theme
      this.renderer.setAttribute(circle, 'stroke', this.theme === 'dark' ? 'white' : 'black');
      this.renderer.setAttribute(circle, 'fill', 'transparent');

      this.renderer.appendChild(svg, circle);
      this.renderer.addClass(svg, 'pin-svg');
      this.renderer.appendChild(parent, svg);

      this.svgCircles.push(svg);
    }

    // Listen for input
    this.renderer.listen(hiddenInput, 'input', (event: any) => {
      const val = event.target.value.replace(/\D/g, '').slice(0, this.length);
      this.values = val.split('');

      // Update SVG fill
      this.svgCircles.forEach((svg, idx) => {
        const circle = svg.querySelector('circle');
        if (circle) {
          if (this.values[idx]) {
            circle.setAttribute('fill', this.theme === 'dark' ? 'white' : 'black');
          } else {
            circle.setAttribute('fill', 'transparent');
          }
        }
      });

      // Emit PIN when fully entered
      if (this.values.length === this.length) {
        this.pinEntered.emit(this.values.join(''));
      }
    });

    // Focus hidden input when container clicked
    this.renderer.listen(parent, 'click', () => {
      hiddenInput.focus();
    });
  }

  private injectStyles() {
    const style = this.renderer.createElement('style');
    style.textContent = `
    .pin-svg-container {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin: 20px;
    }
    .pin-svg {
        cursor: pointer;
    }
    .light-theme {
        color: #000;
    }
    .dark-theme {
        background-color: #000;
        color: #fff;
    } `;
    document.head.appendChild(style);
  }
}
