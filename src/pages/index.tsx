import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  console.log('data', session);

  if (session) {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm flex">
          <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
            NextJS application with&nbsp;
            <code className="font-mono font-bold">next-auth</code>
          </p>
          <Link
            href="/api/auth/signout"
            className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 hover:bg-zinc-800/50 transition-colors dark:bg-zinc-800/30 dark:from-inherit  w-auto  rounded-xl border bg-gray-200  px-4 py-3"
            onClick={() => signOut()}
          >
            Logout
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm flex">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
          NextJS application with&nbsp;
          <code className="font-mono font-bold">next-auth</code>
        </p>
        <Link
          href="/api/auth/signin"
          className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 hover:bg-zinc-800/50 transition-colors dark:bg-zinc-800/30 dark:from-inherit  w-auto  rounded-xl border bg-gray-200  px-4 py-3"
          onClick={() => signIn()}
        >
          Login
        </Link>
      </div>
    </main>
  );
}
