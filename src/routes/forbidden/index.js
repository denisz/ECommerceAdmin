import React from 'react';
import Layout from 'components/Layout';
import Forbidden from './Forbidden';

export default {

  path: '/forbidden',

  action() {
    return {
      title: '',
      component: <Layout fullscreen><Forbidden /></Layout>,
    };
  },

};
