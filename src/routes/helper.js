import React from 'react';
import Forbidden from './forbidden/Forbidden';

export const authorize = (route, fallback, allow) => {
  const oldAction = route.action;
  route.action = async (state, context) => {//eslint-disable-line
    if (context.isAuthenticated || allow) {
      return await oldAction(state, context);//eslint-disable-line
    }
    return {
      redirect: fallback,
    };
  };
  return route;
};

export const anonymous = (route, fallback, allow) => {
  const oldAction = route.action;
  route.action = async (state, context) => {//eslint-disable-line
    if (!context.isAuthenticated || allow) {
      return await oldAction(state, context);//eslint-disable-line
    }
    return {
      redirect: fallback,
    };
  };
  return route;
};

export const exceptions = (route) => {
  const oldAction = route.action;
  route.action = async (state, context) => {//eslint-disable-line
    try {
      return await oldAction(state, context);
    } catch (e) {
      console.error(e, e.code);

      switch (e.code) {
        case 404:
          return {
            redirect: '/forbidden',
          };
        case 401:
          return {
            redirect: !context.isAuthenticated ? '/login' : '/logout',
          };
        case 0:
          return {
            redirect: '/forbidden',
          };
        default:
          return {
            component: <Forbidden />,
          };
      }
    }
  };
  return route;
};
