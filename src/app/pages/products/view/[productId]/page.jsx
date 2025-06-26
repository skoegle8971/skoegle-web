'use client';

import Layout from '@/Components/Layout/Layout';
import { useParams } from 'next/navigation';
import Readmore from '@/Components/Pages/Product/Readmore';

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <Layout>
      <Readmore productId={productId} />
    </Layout>
  );
}
