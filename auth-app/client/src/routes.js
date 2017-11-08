import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import LoginPage from './containers/LoginPage.jsx';

const routes = {
  component: Base,
  childRoutes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/login',
    component: LoginPage
  }, {
    path: '/signup',
    component: SignUpPage
  }]
};

export default routes;
