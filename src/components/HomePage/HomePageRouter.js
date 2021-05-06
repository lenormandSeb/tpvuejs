import HomePage from '../HomePage/HomePage';
import LoginPage from '../HomePage/LoginPage';

export default [
    {
        path: '/',
        name: 'homepage',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    }
]