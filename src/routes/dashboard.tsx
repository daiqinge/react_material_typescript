import {
  Dashboard,
  LocationOn,
  Person,
} from '@material-ui/icons';
import DashboardPage from 'views/Dashboard/Dashboard';
import Maps from 'views/Maps/Maps';
import User from 'views/User/UserList';
import AddUser  from 'views/User/AddUser';

export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/user',
    sidebarName: 'User',
    navbarName: 'User',
    icon: Person,
    component: User,
  },
  {
    path: '/maps',
    sidebarName: 'Maps',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps,
  },
  {
    path: '/AddUser',
    component: AddUser,
  },
  {
    path: '/',
    navbarName: 'Redirect',
    redirect: true,
    to: '/dashboard',
  },
];

export default dashboardRoutes;
