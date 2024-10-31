<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark-subtle justify-content-between">
            <div class="container-fluid px-lg-5 px-3">
                <RouterLink class="navbar-brand me-0" to="/">🛍️ La Boutique</RouterLink>

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
                        <RouterLink class="nav-link" to="/">Accueil</RouterLink>
                        <RouterLink class="nav-link" to="/products">Produits</RouterLink>
                        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                        <RouterLink class="nav-link" to="/cart">Panier</RouterLink>
                    </div>

                    <div class="navbar-nav gap-1">
                        <RouterLink to="/login">
                        <button
                            type="button"
                            class="btn btn-primary nav-link"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                        >
                            Connexion
                        </button>
                        </RouterLink>

                        <RouterLink to="/register">
                            <button
                                type="button"
                                class="btn btn-dark nav-link pe-0"
                                data-bs-toggle="modal"
                                data-bs-target="#registerModal"
                            >
                                Inscription
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup></script>
