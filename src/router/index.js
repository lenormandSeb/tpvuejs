import Vue from 'vue';
import Router from 'vue-router';
import HomeRoute from '../components/HomePage/HomePageRouter';
import CategorieRoute from '../components/Categories/CategoriesRoute';
import UnderCategorieRoute from '../components/UnderCategorie/UnderCategorieRoute';

Vue.use(Router);

const baseRoute = [];

const routes = baseRoute.concat(HomeRoute, CategorieRoute, UnderCategorieRoute);

export default new Router({
    routes
})