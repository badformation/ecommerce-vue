import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'
import CartPage from '../pages/CartPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'

export const routes = [
    {path: '/', component: HomePage},
    {path: '/contact', component: ContactPage},
    {path: '/cart', component: CartPage},
    {path: '/products', component: ProductsPage},
    {path: '/login', component: LoginPage},
    {path: '/register', component: RegisterPage}
]