import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils';

const headingVariants = cva(cn('font-bold font-inter leading-relaxed'), {
  variants: {
    variant: {
      h1: 'text-primary text-2xl',
      h2: 'text-white text-xl',
      h3: 'text-white text-lg',
      h4: 'text-white text-md font-normal',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

function Heading({ className, children, variant = 'h1' }: HeadingProps) {
  const classes = cn(headingVariants({ variant, className }));

  return (
    <>
      {variant === 'h1' && <h1 className={classes}>{children}</h1>}
      {variant === 'h2' && <h2 className={classes}>{children}</h2>}
      {variant === 'h3' && <h3 className={classes}>{children}</h3>}
      {variant === 'h4' && <h4 className={classes}>{children}</h4>}
    </>
  );
}

Heading.displayName = 'Button';

export type HeadingProps = VariantProps<typeof headingVariants> & {
  className?: string;
  children: React.ReactNode;
};

export { Heading, headingVariants };
