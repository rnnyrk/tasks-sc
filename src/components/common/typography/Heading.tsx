'use client';

// const headingVariants = cva(cn('font-bold font-inter leading-relaxed'), {
//   variants: {
//     variant: {
//       h1: 'text-primary text-2xl',
//       h2: 'text-white text-xl',
//       h3: 'text-white text-lg',
//       h4: 'text-white text-md font-normal',
//     },
//   },
//   defaultVariants: {
//     variant: 'h1',
//   },
// });

function Heading({ children, variant = 'h1' }: HeadingProps) {
  return (
    <>
      {variant === 'h1' && <h1>{children}</h1>}
      {variant === 'h2' && <h2>{children}</h2>}
      {variant === 'h3' && <h3>{children}</h3>}
      {variant === 'h4' && <h4>{children}</h4>}
    </>
  );
}

Heading.displayName = 'Button';

export type HeadingProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
};

export { Heading };
