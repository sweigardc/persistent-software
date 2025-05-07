'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <a href="mailto:contact@persistentsoftware.com">
    <Button
      variant="outline"
      className="w-full rounded-full"
    >
          Get Started 
    </Button>
    </a>
  );
}
