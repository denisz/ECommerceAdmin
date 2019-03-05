import React from 'react';
import Layout from 'components/Layout';
import Logout from './Logout';

export default {
  path: '/logout',
  async action() {
    return {
      title: 'Logout',
      component: <Layout fullscreen ><Logout /></Layout>,
    };
  },
};
