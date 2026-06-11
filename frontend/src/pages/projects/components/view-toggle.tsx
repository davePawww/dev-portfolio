import { motion } from 'motion/react';

type ViewToggleProps = {
  active: 'featured' | 'all';
  onChange: (view: 'featured' | 'all') => void;
};

const tabs = [
  { key: 'featured' as const, label: 'Featured' },
  { key: 'all' as const, label: 'All Projects' },
];

export function ViewToggle({ active, onChange }: ViewToggleProps) {
  return (
    <div className="bg-muted inline-flex rounded-lg p-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={`relative rounded-md px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
            active === tab.key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {active === tab.key && (
            <motion.span
              layoutId="active-tab"
              className="bg-background absolute inset-0 rounded-md shadow-sm"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
