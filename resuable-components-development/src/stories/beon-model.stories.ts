import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';

import { Dialog } from './../../projects/reusable-components/src/lib/dialog/dialog';
import { Button } from './../../projects/reusable-components/src/lib/buttons/button.component';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

const meta: Meta<typeof Button> = {
    title: 'Example/Beon-dialog',
    component: Button,
    decorators: [
        moduleMetadata({
            imports: [NgpDialogTrigger, Dialog],
        }),
    ],
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Dialogs: Story = {
    render: (args) => ({
        props: args,
        template: `
            <button app-button [ngpDialogTrigger]="dialog" variant="primary" size="lg">Open Dialog</button>

            <ng-template #dialog let-close="close">
                <app-dialog header="Dialog header">
                    <p>This is a dialog. It can be used to display information or to ask for confirmation.</p>
                    <p>You can use the dialog to display forms, images, or any other content.</p>
                    <p>For example, ask the user if they want to delete an item.</p>

                    <div style="display:flex; gap:8px; margin-top:16px;">
                        <button app-button (click)="close()" variant="primary" size="lg">Close</button>
                        <button app-button (click)="close()" variant="secondary" size="lg">Delete</button>
                    </div>
                </app-dialog>
            </ng-template>
        `,
    })
};
