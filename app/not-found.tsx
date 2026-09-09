import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-[70dvh] items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-start gap-5">
        <span className="ps-label text-signal-700">Error 404</span>
        <h1>Page not found.</h1>
        <p className="text-graphite-500">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
