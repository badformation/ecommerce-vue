<template>
   <h2 class="text-center mt-2">Séléctionnez votre produit</h2>
        <div class="row w-100">
            <div class="col-12 pe-0">
                <form class="">
                    <div class="row mt-5 mx-4">
                        <div class="col-lg-5 offset-lg-3 col-8 p-0 pe-2">
                            <input class="form-control me-2" type="search" placeholder="Recherchez un article"
                                aria-label="Search">
                        </div>
                        <div class="col-lg-1 col-4 p-0">
                            <button class="btn btn-outline-success w-100" type="submit">Recherche</button>
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
                        <div class="col-6 col-lg-3 mt-3">
                            <div class="card p-0 rounded-3">
                                <img class="card-img-top rounded-top-3" src="https://picsum.photos/150" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Card title</h5>
                                    <p class="card-text">Some quick example text to build</p>
                                    <div class="d-flex w-100 align-items-center justify-content-center">
                                        <a href="product.html" class="btn btn-primary ">Ajoutez au panier</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3 mt-3">
                            <div class="card p-0 rounded-3">
                                <img class="card-img-top rounded-top-3" src="https://picsum.photos/150" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Card title</h5>
                                    <p class="card-text">Some quick example text to build</p>
                                    <div class="d-flex w-100 align-items-center justify-content-center">
                                        <a href="#" class="btn btn-primary ">Ajoutez au panier</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3 mt-3">
                            <div class="card p-0 rounded-3">
                                <img class="card-img-top rounded-top-3" src="https://picsum.photos/150" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Card title</h5>
                                    <p class="card-text">Some quick example text to build</p>
                                    <div class="d-flex w-100 align-items-center justify-content-center">
                                        <a href="#" class="btn btn-primary ">Ajoutez au panier</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-lg-3 mt-3">
                            <div class="card p-0 rounded-3">
                                <img class="card-img-top rounded-top-3" src="https://picsum.photos/150" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Card title</h5>
                                    <p class="card-text">Some quick example text to build</p>
                                    <div class="d-flex w-100 align-items-center justify-content-center">
                                        <a href="#" class="btn btn-primary ">Ajoutez au panier</a>
                                    </div>
                                </div>
                            </div>
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
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>
