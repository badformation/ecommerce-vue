<template>
    <h1 class="text-center mt-2">Séléctionnez votre produit</h1>
    <div v-if="cardsProduct.length > 0">
        <div class="row w-100">
            <div class="col-12 pe-0">
                <form class="">
                    <div class="row mt-5 mx-4">
                        <div class="col-lg-5 offset-lg-3 col-8 p-0 pe-2">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Recherchez un article"
                                aria-label="Search"
                            />
                        </div>
                        <div class="col-lg-1 col-4 p-0">
                            <button class="search-btn btn w-100" type="submit">
                                Recherche
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="container-fluid">
            <!-- Colonne pour régler la taille des cards -->
            <div class="row">
                <div class="col-12 offset-md-3 col-md-6">
                    <!-- FIN de Colonne pour régler la taille des cards -->
                    <div class="row justify-content-center align-items-center">
                        <!-- Card -->
                        <div
                            class="col-6 col-lg-3 mt-3"
                            v-for="(card, index) in cardsProduct"
                        >
                            <CardProduct
                                :id="card.id"
                                :image="card.image"
                                :title="card.title"
                                :price="card.price"
                                :description="card.description"
                            />
                        </div>
                        <!-- Fin de card -->
                    </div>
                </div>

                <!-- Pagination -->
                <div id="pagination">
                    <ul class="pagination justify-content-center mt-3">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center" v-else>Il n'y a plus de produits</div>
</template>

<script setup>
    import CardProduct from '../components/CardProduct.vue'

    import { reactive } from 'vue'
    const cardsProduct = reactive([
        {
            id: '1',
            image: 'https://picsum.photos/200/300',
            title: 'Produit 1',
            price: '10',
            description: 'Description du produit 1',
        },
        {
            id: '2',
            image: 'https://picsum.photos/200/300',
            title: 'Produit 2',
            price: '100',
            description: 'Description du produit 2',
        },
        {
            id: '3',
            image: 'https://picsum.photos/200/300',
            title: 'Produit 3',
            price: '9',
            description: 'Description du produit 3',
        },
        {
            id: '4',
            image: 'https://picsum.photos/200/300',
            title: 'Produit 4',
            price: '27',
            description: 'Description du produit 4',
        },
    ])
</script>
