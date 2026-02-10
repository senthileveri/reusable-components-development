import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { BeonButtonComponent } from './beon-button.component';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BeonButtonComponent> = {
  title: 'Example/Beon-button1',
  component: BeonButtonComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BeonButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
};
