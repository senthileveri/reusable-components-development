import { Component } from '@angular/core';
import { Button } from './../../../../projects/reusable-components/src/lib/buttons/button.component';
import { InputComponent } from './../../../../projects/reusable-components/src/lib/input/input.component';
import { SelectComponent } from './../../../../projects/reusable-components/src/lib/select/select.component';
import { FloatingLabelDirective } from './../../../../projects/reusable-components/src/lib/floating-label/floating-label.directive';
import { FloatingLabelPinDirective } from './../../../../projects/reusable-components/src/lib/floating-label-pin/floating-label-pin.directive';
import { PinEntryDirective } from './../../../../projects/reusable-components/src/lib/pin-entry/pin-entry.directive';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { heroArrowLeftCircleMicro } from '@ng-icons/heroicons/micro'
@Component({
  selector: 'app-enroll',
  imports: [Button,NgIcon, InputComponent, SelectComponent, PinEntryDirective, FloatingLabelDirective,FloatingLabelPinDirective],
  templateUrl: './enroll.html',
  styleUrl: './enroll.scss',
  viewProviders: [provideIcons({ heroUsers, heroArrowLeftCircleMicro })]
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

  onPinEntered(pin: string) {
    console.log('PIN received from directive:', pin); // You can now use this PIN for validation, API calls, etc.
  }
}
