import CategoriePage from '../Categories/CategoriesPage'

export default [
    {
        path: '/categories',
        name: 'categories',
        component: CategoriePage
    },
    {
        path: '/categorie/:id',
        name: 'categorie',
        component: CategoriePage
    }
]