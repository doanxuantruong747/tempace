import React from 'react';
import Head from 'next/head';
import ScrollTop from '@/components/ScrollTop';
import dynamic from 'next/dynamic';
import { DetailProduct } from '@/components/detail-product/DetailProduct';
import HotLine from '@/components/HotLine';


const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});
const ProductDetail = () => {
  return (
    <React.Suspense>
      <Head>
        <title>WoolpadStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <DetailProduct />
        <HotLine />
      </LayoutWrapper>
    </React.Suspense>
  );
};

export default ProductDetail;
