import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/variants';
import { motion } from 'motion/react';

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const AnimatedButton = motion.create(
  ({ className, ...props }: React.ComponentProps<typeof Button>) => (
    <Button className={cn('transition-none', className)} {...props} />
  ),
);

export { Button, AnimatedButton };
