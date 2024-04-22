'use client';

import { useRouter } from 'next/navigation';

const OnePage = () => {
  const router = useRouter();
  return <button onClick={() => router.replace('/two')}>go two</button>;
};

export default OnePage;
