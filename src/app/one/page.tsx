'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const OnePage = () => {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
  const getUrl = () => axios(url).then((res) => res.data);
  const { data } = useQuery({ queryFn: getUrl, queryKey: ['url'] });
  console.log(data);
  const router = useRouter();
  return (
    <>
      {data?.map((item: any) => JSON.stringify(item))}
      <br />
      <button onClick={() => router.replace('/two')}>go two</button>
    </>
  );
};

export default OnePage;
