import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

function App() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Testing
      </motion.div>
      <Button className="font-bold text-red-100">Test</Button>
    </>
  );
}

export default App;
