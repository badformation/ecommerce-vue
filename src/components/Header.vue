<template>
    <header>
        <nav
            class="navbar navbar-expand-lg navbar-light bg-dark-subtle justify-content-between"
        >
            <div class="container-fluid px-lg-5 px-3">
                <RouterLink class="navbar-brand me-0" to="/"
                    >🛍️ La Boutique</RouterLink
                >

                <!-- Le bouton burger apparait uniquement sur mobile -->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Menu burger : apparaîtra uniquement sur mobile -->
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="navbar-nav mx-auto">
                        <RouterLink
                            v-for="(link, index) in navLinks"
                            :key="index"
                            class="nav-link text-center"
                            :to="link.path"
                        >
                            {{ link.title }}<span v-if="link.title === 'Panier' && totalItems"> ({{ totalItems }})</span>
                        </RouterLink>
                        
                    </div>

                    <div class="navbar-nav gap-1">
                        <RouterLink
                            v-for="(link, index) in authLinks"
                            :key="index"
                            :class="link.class"
                            :to="link.path"
                        >
                            {{ link.title }}
                        </RouterLink>
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { reactive } from 'vue'
    // On importe notre store "cart"
    import { useCartStore } from '../stores/cart'

    const navLinks = reactive([
        { title: 'Accueil', path: '/' },
        { title: 'Produits', path: '/products' },
        { title: 'Contact', path: '/contact' },
        { title: 'Panier', path: '/cart' },
    ])

    const authLinks = reactive([
        { title: 'Connexion', path: '/login', class: 'btn btn-primary' },
        { title: 'Inscription', path: '/register', class: 'btn btn-dark' },
    ])

    // On initialise le store pour pouvoir l'utiliser
    const cartStore = useCartStore()

    // On récupère les données calculées du panier
    const totalItems = cartStore.totalItems
</script>
