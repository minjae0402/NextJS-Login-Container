'use client'; // 클라이언트 컴포넌트로 설정

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link href="/">My App</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        {session ? (
          <li>
            <button onClick={() => signOut()}>Sign out</button>
          </li>
        ) : (
          <>
            <li>
              <button onClick={() => signIn('google')}>
                Sign in with Google
              </button>
            </li>
            <li>
              <button onClick={() => signIn('kakao')}>
                Sign in with Kakao
              </button>
            </li>
            <li>
              <button onClick={() => signIn('naver')}>
                Sign in with Naver
              </button>
            </li>
            <li>
              <button onClick={() => signIn('apple')}>
                Sign in with Apple
              </button>
            </li>
            <li>
              <button onClick={() => signIn('facebook')}>
                Sign in with Facebook
              </button>
            </li>
            <li>
              <button onClick={() => signIn('twitter')}>
                Sign in with Twitter
              </button>
            </li>
            <li>
              <button onClick={() => signIn('github')}>
                Sign in with GitHub
              </button>
            </li>
            <li>
              <button onClick={() => signIn('linkedin')}>
                Sign in with LinkedIn
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
