import React from 'react';
import Layout from 'components/Layout';
import SignIn from './Signin';

export default {
  path: '/signin',
  async action() {
    return {
      title: '',
      component: <Layout><SignIn/></Layout>,
    };
  }
};
