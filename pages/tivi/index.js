import HotLine from '@/components/HotLine';
import { DetailProduct } from '@/components/detail-product/DetailProduct';
import { DetailTivi } from '@/components/detail-product/DetailTivi';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';


const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
 ssr: false,
});
const About = () => {
 return (
  <React.Suspense>
   <Head>
    <title>Woolstore - TiVi</title>
    <link rel="icon" href="//favicon.png" />
   </Head>
   <LayoutWrapper>
    <DetailTivi />
    <HotLine />
   </LayoutWrapper>
  </React.Suspense>
 );
};

export default About;
