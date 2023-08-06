import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../i18next';
import { Products } from '@/components/products/Card';
import { Hero } from '@/components/home/Hero';
import { ListProduct } from '@/components/products/ListProduct';

const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: true,
});

export default function Home() {

  return (
    <React.Suspense>
      <Head>
        <title>WoolpadStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <div className='mt-[100px]'>
          <Hero />
        </div>

        <ListProduct />
      </LayoutWrapper>
    </React.Suspense>
  );
}
