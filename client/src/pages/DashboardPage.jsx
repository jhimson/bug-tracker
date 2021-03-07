/* eslint-disable react/button-has-type */
import React from 'react';

// Components
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Issues from '../components/Issues';
import RecentUpdates from '../components/RecentUpdates';

const DashboardPage = () => (
  <Layout>
    <div className="mb-2 bg-gray-100 page-content">
      <div className="flex flex-col items-start justify-center lg:space-x-5 lg:p-10 lg:flex-row">
        <div className="flex flex-col w-full space-y-2">
          <Projects />
          <Issues />
        </div>
        <RecentUpdates />
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
