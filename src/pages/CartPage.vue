<template>
        <h1 class="text-center mb-4">Récapitulatif de mon panier</h1>
        <!-- Container englobe toutes les cartes -->
        <div class="container">
            <div class="row">

                <!-- Container englobe mes cartes avec; img, nom, description, prix, quantité, supprimer -->
                <div class="col-12 col-lg-8">
                    <!-- Container englobe ma carte -->
                    <div class="row grid-cart">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-2 d-none d-sm-block ps-0">
                                    <img src="https://picsum.photos/140/190" </img>
                                </div>
                                <div class="col-6 col-lg-4 pe-0 border-end">
                                    <h2>Argan - Huile sauvage</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                    <p class="card-text">5,95€</p>
                                </div>
                                <div class="col-2 pt-2 pt-lg-1">
                                    <input class="w-100" type="number" id="quantity-card" name="quantity-card" min="1"
                                        max="100" />
                                </div>
                                <div class="col-2 border-end pt-lg-1 ps-1">Prix: 5,95€</div>
                                <div class="col-2 text-center d-flex align-items-center justify-content-center">
                                    <a class="text-decoration-none" href="#">❌</a>
                                </div>
                            </div>
                        </div>
                        <!-- Container englobe ma carte -->
                        <div class="col-12">
                            <div class="row border-top border-bottom">
                                <div class="col-2 d-none d-sm-block ps-0">
                                    <img src="https://picsum.photos/140/190" </img>
                                </div>
                                <div class="col-6 col-lg-4 pe-0 border-end">
                                    <h2>Argan - Huile sauvage</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                    <p class="card-text">5,95€</p>
                                </div>
                                <div class="col-2 pt-2 pt-lg-1">
                                    <input class="w-100" type="number" id="quantity-card" name="quantity-card" min="1"
                                        max="100" />
                                </div>
                                <div class="col-2 border-end pt-lg-1 ps-1">Prix: 5,95€</div>
                                <div class="col-2 text-center d-flex align-items-center justify-content-center">
                                    <a class="text-decoration-none" href="#">❌</a>
                                </div>
                            </div>
                        </div>
                        <!-- Container englobe ma carte -->
                        <div class="col-12">
                            <div class="row">
                                <div class="col-2 d-none d-sm-block px-0">
                                    <img src="https://picsum.photos/140/190" </img>
                                </div>
                                <div class="col-6 col-lg-4 pe-0 border-end">
                                    <h2 >Argan - Huile sauvage</h2>
                                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur.</p>
                                    <p class="card-text">5,95€</p>
                                </div>
                                <div class="col-2 pt-2 pt-lg-1">
                                    <input class="w-100" type="number" id="quantity-card" name="quantity-card" min="1"
                                        max="100" />
                                </div>
                                <div class="col-2 border-end pt-lg-1 ps-1">Prix: 5,95€</div>
                                <div class="col-2 text-center d-flex align-items-center justify-content-center">
                                    <a class="text-decoration-none" href="#">❌</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Container englobe mes produits, livraison, total -->
                <div class="col-12 col-lg-4">
                    <div class="row grid-cart ms-lg-2 mt-4">
                        <div class="col-12">Produits:</div>
                        <div class="col-12 border-bottom border-1">Livraison:</div>
                        <div class="col-12">Total: </div>
                        <button type="button" class="btn btn-primary btn-lg mt-1">Valider la commande</button>
                    </div>
                </div>
            </div>
        </div>
</template>