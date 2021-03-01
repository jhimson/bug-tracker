/* eslint-disable react/button-has-type */
import React from 'react';

// Icons
import { IoIosArrowUp } from 'react-icons/io';

// Components
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import RecentUpdates from '../components/RecentUpdates';
import IssueFilters from '../components/IssueFilters';
import IssuesTableList from '../components/IssuesTableList';

const DashboardPage = () => (
  <Layout>
    <div className="h-screen bg-gray-100">
      <div className="flex items-start justify-center p-10 space-x-5">
        <div className="flex flex-col w-screen space-y-2">
          <Projects />
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <IoIosArrowUp
                  size="2em"
                  className="mb-2 cursor-pointer hover:text-green-500"
                />
                <h1 className="mb-2 text-lg font-bold">My Issues</h1>
              </div>
            </div>
            <div className="bg-white rounded shadow-lg ">
              <div className="flex flex-col">
                <IssueFilters />
                <IssuesTableList />
              </div>
            </div>
          </div>
        </div>
        <RecentUpdates />
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
