import type { Meta, StoryObj } from '@storybook/react-vite';
import HomePage from './index';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
