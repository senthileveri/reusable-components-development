import { Component, input, signal } from "@angular/core";

@Component({
  selector: 'app-input',
  template: `
    <label class="ngp-field">
      <input
        type="text"
        [value]="value()"
        (input)="onInput($event)"
        (focus)="focused.set(true)"
        (blur)="focused.set(false)"
        class="ngp-input"
        [attr.placeholder]="placeholder()"
      />
      <span class="ngp-label" [attr.data-active]="(value() || focused()) ? '' : null">{{ label() }}</span>
    </label>
  `,
  styles: `
    :host { display: block; width: 100%; max-width: var(--width400); font-family: var(--fontFamily); }
    .ngp-field { position: relative; display: block; }
    .ngp-input {
      width: 100%;
      padding: 1rem 0.75rem 0.5rem 0.75rem;
      font-size: var(--fontSize14, 14px);
      border: 1px solid var(--ngp-outline-border, #e2e8f0);
      border-radius: 8px;
      background: var(--ngp-input-background, #fff);
      box-sizing: border-box;
      transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    }
    .ngp-input:hover {
      border-color: var(--ngp-outline-border-hover, #cbd5e1);
    }
    .ngp-input:focus {
      outline: none;
      border-color: var(--shuttleGray);
      box-shadow: 0 0 0 4px rgba(59,130,246,0.08);
    }
    .ngp-input:disabled {
      background: var(--ngp-disabled-background, #f8fafc);
      color: var(--ngp-text-muted, #9ca3af);
      cursor: not-allowed;
    }
    .ngp-label {
      position: absolute;
      left: 0.75rem;
      top: 0.8rem;
      transform-origin: left top;
      transition: transform 0.12s ease, top 0.12s ease, font-size 0.12s ease, color 0.12s ease;
      color: var(--ngp-text-muted, #6b7280);
      pointer-events: none;
      background: transparent;
      padding: 0 0.125rem;
      font-weight: 500;
    }
    .ngp-label[data-active] {
      transform: translateY(-0.85rem) scale(0.82);
      top: 0.9rem;
      font-weight: 600;
      color: var(--midnightGray);
      background: transparent;
    }
    /* error state when field has data-invalid attribute */
    :host([data-invalid]) .ngp-input,
    .ngp-field[data-invalid] .ngp-input {
      border-color: var(--ngp-destructive-background, #ef4444);
    }
    :host([data-invalid]) .ngp-label,
    .ngp-field[data-invalid] .ngp-label {
      color: var(--ngp-destructive-background, #ef4444);
    }
  `,
})
export class InputComponent {
  /**
   * The floating label text.
   */
  readonly label = input<string>("Label");

  /**
   * Optional placeholder (kept for accessibility, primary label floats).
   */
  readonly placeholder = input<string>("");

  /**
   * Internal value signal for the input's value.
   */
  readonly value = signal("");

  /**
   * Focus state signal used to float the label when focused.
   */
  readonly focused = signal(false);

  onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
