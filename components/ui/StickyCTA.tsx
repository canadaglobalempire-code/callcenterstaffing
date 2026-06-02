'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const HIDE_ON: string[] = ['/contact'];

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;
  if (HIDE_ON.some((p) => pathname?.startsWith(p))) return null;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed bottom-5 right-5 z-40 transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none',
      )}
    >
      <div className="group relative flex items-center gap-2 rounded-full bg-navy-950 pl-2 pr-2 py-2 shadow-2xl ring-1 ring-white/10">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/5 text-white/60 hover:bg-white/15 hover:text-white transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 h-10 text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-accent-400 hover:shadow-xl"
        >
          <span className="hidden sm:inline">Get a Free Quote</span>
          <span className="sm:hidden">Free Quote</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
