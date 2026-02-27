import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { Button } from './../../projects/reusable-components/src/lib/buttons/button.component';
import {BeonFlButton} from 'beon-web-ui-kit';

@Component({
  selector: 'beon-button',
  standalone: true,
  imports: [CommonModule, BeonFlButton],
  template: ` <button
  type="button"
  app-button
  [variant]="variant"
  [size]="size"
 [disabled]="disabled"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class BeonButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  variant: 'primary' | 'secondary' = 'primary';

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  @Input()
  disabled = false;
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  
}
