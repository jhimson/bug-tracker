import React from 'react';
import Layout from '../components/Layout';

const DashboardPage = () => {
    return(
        <Layout>
            <div className='h-screen'>
                <div className='flex items-center justify-center m-10 space-x-5'>
                    <div className='flex flex-col w-screen space-y-10'>
                        <div>
                            <h1 className='text-6xl bg-gray-200'>
                                Projects Section
                            </h1>
                        </div>
                        <div>
                            <h1 className='text-6xl bg-gray-200'>
                                My issues Section
                            </h1>
                        </div>
                    </div>
                    <div className='w-screen'>
                        <h1 className='text-6xl bg-gray-200'>
                            Recent updates
                        </h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DashboardPage;