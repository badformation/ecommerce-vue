<template>
    <div class="container">
        <!-- Section des produits vedettes -->
        <h1 class="text-center">Bienvenue chez La Boutique</h1>
        <p class="text-center">Venez découvrir notre arrivage !</p>

        <div class="carrousselParent">
            <div class="carroussel">
                <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://picsum.photos/1920/700/?blur" class="d-block w-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://picsum.photos/1920/700?grayscale" class="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://picsum.photos/seed/picsum/1920/700?blur" class="d-block" alt="..." />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
