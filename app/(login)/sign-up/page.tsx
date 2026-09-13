import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Login } from '../login';

export const metadata: Metadata = {
  title: 'Sign up | Persistent Software',
  robots: { index: false, follow: true }
};

export default function SignUpPage() {
  return (
    <Suspense>
      <Login mode="signup" />
    </Suspense>
  );
}
