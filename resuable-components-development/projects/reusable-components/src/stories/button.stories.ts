import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { Button } from './../lib/buttons/button.component';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
};
