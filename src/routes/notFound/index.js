import React from 'react';
import Layout from 'components/Layout';

export default {
  path: '(.*)',
  action() {
    return {
      title: 'Not Found',
      status: 404,
      component: (
        <Layout fullscreen>
          <div className="vertical-center">
            <div className="container-fluid">
              <h1 className="text-center">Page Not Found.</h1>
              <p className="text-center">Go to <a href="/">Home Page</a></p>
            </div>
          </div>
        </Layout>
      ),
    };
  },
};
