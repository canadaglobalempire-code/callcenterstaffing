import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { FAQ } from '@/components/ui/FAQ';

type FAQSectionProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { q: string; a: string }[];
  background?: 'white' | 'neutral';
  ctaHref?: string;
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
};

export function FAQSection({
  eyebrow = 'Frequently asked',
  heading,
  intro,
  items,
  background = 'white',
  ctaHref,
  ctaLabel,
  image,
  imageAlt = '',
}: FAQSectionProps) {
  return (
    <Section background={background}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={2} display="m" className="mt-5">
              {heading}
            </Heading>
            {intro && <p className="mt-5 text-body-l text-navy-700 max-w-prose">{intro}</p>}
            {ctaHref && ctaLabel && (
              <Link
                href={ctaHref}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-5 h-11 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
              >
                {ctaLabel}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
            {image && (
              <div className="ring-navy-950/5 relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 lg:block">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <FAQ items={items} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
