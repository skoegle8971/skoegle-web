import { lazy, Suspense } from 'react';
import Layout from '../Components/Layout/Layout';

const IotHomes = lazy(() => import('../Components/Home/IotHomes'));
const IotProjects = lazy(() => import('../Components/Home/IotProjects'));
const IotServices = lazy(() => import('../Components/Home/IotServices'));
const IotTech = lazy(() => import('../Components/Home/IotTech'));
const IotBlogs = lazy(() => import('../Components/Home/IotBlogs'));

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
