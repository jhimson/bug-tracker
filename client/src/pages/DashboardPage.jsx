/* eslint-disable react/button-has-type */
import React from 'react';

// Components
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Issues from '../components/Issues';
import RecentUpdates from '../components/RecentUpdates';

const DashboardPage = () => (
  <Layout>
    <div className="h-screen bg-gray-100">
      <div className="flex items-start justify-center p-10 space-x-5">
        <div className="flex flex-col w-screen space-y-2">
          <Projects />
          <Issues />
        </div>
        <RecentUpdates />
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
