import type { Meta, StoryObj } from '@storybook/react-vite';
import App from './App';

const meta = {
  title: 'App',
  component: App,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
