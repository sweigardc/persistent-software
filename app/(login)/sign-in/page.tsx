import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Login } from '../login';

export const metadata: Metadata = {
  title: 'Sign in | Persistent Software',
  robots: { index: false, follow: true }
};

export default function SignInPage() {
  return (
    <Suspense>
      <Login mode="signin" />
    </Suspense>
  );
}
