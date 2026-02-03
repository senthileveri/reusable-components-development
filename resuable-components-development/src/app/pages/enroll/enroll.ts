import { Component } from '@angular/core';
import { Button } from './../../../../projects/reusable-components/src/lib/buttons/button.component';
import { InputComponent } from './../../../../projects/reusable-components/src/lib/input/input.component';
import { SelectComponent } from './../../../../projects/reusable-components/src/lib/select/select.component';
import { FloatingLabelDirective } from './../../../../projects/reusable-components/src/lib/floating-label/floating-label.directive';
import { FloatingLabelPinDirective } from './../../../../projects/reusable-components/src/lib/floating-label-pin/floating-label-pin.directive';
@Component({
  selector: 'app-enroll',
  imports: [Button, InputComponent, SelectComponent, FloatingLabelDirective,FloatingLabelPinDirective],
  templateUrl: './enroll.html',
  styleUrl: './enroll.scss',
})
export class Enroll {
  email: string = '';
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
  ];
}
