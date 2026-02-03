import { Component, input, signal } from "@angular/core";
import { NgFor, NgIf } from '@angular/common';

/**
 * Simple select/dropdown component with floating label behavior similar to the input.
 * Accepts `options` as an array of strings or objects { value, label }.
 */
@Component({
  standalone: true,
  imports: [NgFor, NgIf],
  selector: 'app-select',
  template: `
    <label class="ngp-field">
      <select
        class="ngp-select"
        (change)="onChange($event)"
        [value]="value()"
      >
      <!-- placeholder option shown inside the native select when no value is selected; fall back to label text -->
        <option *ngIf="(placeholder() || label())" value="">{{ placeholder() || label() }}</option>
        <option *ngFor="let opt of options()" [value]="opt.value ?? opt">{{ opt.label ?? opt }}</option>
      </select>
      <!-- floating label is hidden by default; it becomes visible only when a value exists -->
      <!-- <span class="ngp-label" [attr.data-active]="(value()) ? '' : null">{{ label() }}</span> -->
    </label>
  `,
  styles: `
    :host { display: block; width: 100%; max-width: var(--width400); font-family: var(--fontFamily); }
    .ngp-field { position: relative;}
    .ngp-select {
      width: 100%;
      padding: 0.875rem 0.75rem 0.5rem 0.75rem;
      font-size: var(--fontSize14, 14px);
      border: 1px solid var(--ngp-outline-border, #e2e8f0);
      border-radius: 8px;
      box-sizing: border-box;
      color: var(--shuttleGray);
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space16, 16px);

    }

    option {
      background-color: violet;
    }

    .ngp-select:focus { outline: none; border-color: var(--shuttleGray); box-shadow: 0 0 0 4px rgba(59,130,246,0.08); }
    // .ngp-label {
    //   position: absolute;
    //   left: 0.75rem;
    //   top: 0.85rem;
    //   transform-origin: left top;
    //   transition: transform 0.12s ease, top 0.12s ease, font-size 0.12s ease;
    //   color: var(--ngp-text-muted, #6b7280);
    //   pointer-events: none;
    //   padding: 0 0.125rem;
    //   font-weight: 500;
    // }
    // .ngp-label[data-active] {
    //   transform: translateY(-0.85rem) scale(0.82);
    //   top: 0.45rem;
    //   font-weight: 600;
    //   color: var(--accent-color, #3b82f6);
    // }
  `,
})
export class SelectComponent {
  readonly label = input<string>('Select');
  readonly placeholder = input<string>('');
  /** Accepts Array<string> or Array<{value,label}> */
  readonly options = input<any[]>([]);
  readonly value = signal('');

  onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const v = target.value;
    this.value.set(v);
  }
}
