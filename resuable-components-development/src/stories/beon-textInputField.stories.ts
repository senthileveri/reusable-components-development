import type { Meta, StoryObj } from '@storybook/angular';

// import { BeonTextInputField } from './beon-text-input-field/beon-text-input-field';
import { FloatingLabelDirective } from './../../projects/reusable-components/src/lib/floating-label/floating-label.directive';

const meta: Meta<FloatingLabelDirective> = {
  title: 'Example/Beon-TextInputField1',
  component: FloatingLabelDirective,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;




// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const inputTypeText: Story = {
//     args: {
//         inputType: 'text'
//     },
// };

export const inputTypeText: Story = {
    render: (args) => ({
        props: args,
        template: `<input type="text" appFloatingLabel label="Username" />`,
    }),
    args: {
        inputType: 'text'
    },
};
