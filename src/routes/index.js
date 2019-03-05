import AuthStore from 'flux/Auth';
import { anonymous, authorize, exceptions } from './helper';
import Login from './login';
import SignIn from './signin';
import Logout from './logout';
import NotFound from './notFound';
import Forbidden from './forbidden';

const debugMode = false;
const authWrapper = route => exceptions(authorize(route, '/login', debugMode));
const anonymousWrapper = route => exceptions(anonymous(route, '/', debugMode));

export default {
  path: '/',
  children: [
    anonymousWrapper(Login),
    anonymousWrapper(SignIn),
    authWrapper(Logout),

    Forbidden,
    NotFound,
  ],
  async action({ next }, context) {
    context.isAuthenticated = AuthStore.isAuthenticated(); //eslint-disable-line
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'App'}`;
    route.description = route.description || '';

    return route;
  },
}
