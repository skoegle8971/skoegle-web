import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';

const IotHomes = lazy(() => import('../Components/IotHomes'));
const IotProjects = lazy(() => import('../Components/IotProjects'));
const IotServices = lazy(() => import('../Components/IotServices'));
const IotTech = lazy(() => import('../Components/IotTech'));
const IotBlogs = lazy(() => import('../Components/IotBlogs'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <IotHomes />
          <br />
          <IotProjects />
           <br />
          <IotTech />
          <br />
          <IotServices />
          <br />
          <IotBlogs />
        </div>
      </Suspense>
    </Layout>
  );
}
