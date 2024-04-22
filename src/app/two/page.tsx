'use client';

import { useRouter } from 'next/navigation';

const OnePage = () => {
  const router = useRouter();

  return <button onClick={() => router.replace('/one')}>go one</button>;
};

export default OnePage;
