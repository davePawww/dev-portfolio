import type { Meta, StoryObj } from '@storybook/react-vite';
import HomePage from './index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
