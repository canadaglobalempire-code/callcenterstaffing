import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-white py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow uppercase tracking-[0.14em] text-accent-500">404</p>
          <Heading level={1} display="l" className="mt-5">
            That page is off the floor.
          </Heading>
          <p className="mt-5 text-body-l text-navy-700">
            The page you were looking for either moved or never existed. If you came from a search
            result, the link may be out of date.
          </p>
          <div className="mt-8 flex gap-4">
            <Button href="/">Back to home</Button>
            <Button href="/locations" variant="secondary">
              Browse regions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
