import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Some text
      </motion.div>
      <Button className="font-bold text-red-100">Test</Button>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
