import {  type Meta, type StoryObj } from '@storybook/angular';

import { Button } from './../../projects/reusable-components/src/lib/buttons/button.component';


const meta: Meta<Button> = {
  title: 'Example/Beon-button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj;
export const Primarysm: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'sm',
    },
};

export const PrimarysmDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'sm',
        disabled: true,
    },
};

export const Primarymd: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'md',
    },
};

export const PrimarymdDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'md',
        disabled: true,
    },
};

export const Primarylg: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'lg',
    },
};

export const PrimarylgDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'primary',
        size: 'lg',
        disabled: true,
    },
};

export const Secondarysm: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'sm',
    },
};

export const SecondarysmDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'sm',
        disabled: true,
    },
};

export const Secondarymd: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'md',
    },
};

export const SecondarymdDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'md',
        disabled: true,
    },
};

export const Secondarylg: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}">Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'lg',
    },
};

export const SecondarylgDisabled: Story = {
    render: (args) => ({
        props: args,
        template: `<button app-button variant="${args['variant']}" size="${args['size']}" ${args['disabled'] ? 'disabled' : ''}>Click Me</button>`,
    }),
    args: {
        variant: 'secondary',
        size: 'lg',
        disabled: true,
    },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// const meta: Meta<BeonButtonComponent> = {
//   title: 'Example/Beon-button',
//   component: BeonButtonComponent,
//   tags: ['autodocs']
// };

// export default meta;
// type Story = StoryObj<BeonButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primarysm: Story = {
//     args: {
//         variant: 'primary',
//         size: 'sm',
//     },
// };

// export const Primarymd: Story = {
//     args: {
//         variant: 'primary',
//         size: 'md',
//     },
// };

// export const Primarylg: Story = {
//     args: {
//         variant: 'primary',
//         size: 'lg',
//     },
// };

// export const PrimarysmDisabled: Story = {
//     args: {
//         variant: 'primary',
//         size: 'sm',
//         disabled: true,
//     },
// };

// export const PrimarymdDisabled: Story = {
//     args: {
//         variant: 'primary',
//         size: 'md',
//         disabled: true,
//     },
// };

// export const PrimarylgDisabled: Story = {
//     args: {
//         variant: 'primary',
//         size: 'lg',
//         disabled: true,
//     },
// };

// export const Secondarysm: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'sm', 
//     },
// };

// export const Secondarymd: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'md',
//     },
// };

// export const Secondarylg: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'lg',
//     },
// };

// export const SecondarysmDisabled: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'sm',
//         disabled: true,
//     },
// };

// export const SecondarymdDisabled: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'md',
//         disabled: true,
//     },
// };

// export const SecondarylgDisabled: Story = {
//     args: {
//         variant: 'secondary',
//         size: 'lg',
//         disabled: true,
//     },
// };
