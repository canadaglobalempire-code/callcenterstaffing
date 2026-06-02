import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'white-outline' | 'accent';
type Size = 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentProps<'button'>, 'className' | 'children'>;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none shadow-sm';

const variants: Record<Variant, string> = {
  primary: 'bg-accent-500 text-white hover:bg-accent-400 hover:shadow-md hover:-translate-y-0.5',
  secondary:
    'bg-white text-navy-950 border border-navy-950/15 hover:border-navy-950 hover:shadow-md',
  tertiary: 'bg-transparent text-accent-500 hover:text-accent-400 px-0 rounded-none shadow-none',
  'white-outline': 'border border-white/30 text-white hover:bg-white hover:text-navy-950',
  accent: 'bg-accent-500 text-white hover:bg-accent-400',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-[15px]',
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', children, className, withArrow, ...rest } = props;
  const tertiarySize = variant === 'tertiary' ? 'text-sm' : sizes[size];
  const classes = cn(base, variants[variant], tertiarySize, className);

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
