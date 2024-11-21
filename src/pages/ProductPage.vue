<template>
    <div class="container my-5">
        <div class="card mx-auto" :style="{ backgroundColor: cardBgColor, color: '#fff', borderRadius: '15px' }">
            <div class="card-body p-4">
                <div class="row justify-content-center align-items-center">
                    <!-- Image du produit -->
                    <div class="col-12 col-md-6 text-center">
                        <img 
                            src="https://via.placeholder.com/400x300" 
                            class="img-fluid rounded" 
                            alt="Produit" 
                        />
                    </div>
                    <!-- Détails du produit -->
                    <div class="col-12 col-md-6 mt-4 mt-md-0">
                        <h1 class="card-title">Nom du produit</h1>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus ante dapibus diam.
                        </p>
                        <h3 class="card-text">Prix : 49.99 €</h3>
                        <p class="card-text"><strong>Évaluation :</strong> ⭐⭐⭐⭐☆</p>
                        <button class="btn btn-light text-dark">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>

.card {
    max-width: 900px; 
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.308);
};

img {
    max-height: 300px;
    object-fit: cover;
};

button {
    border-radius: 5px;
    font-weight: bold;
};

h1, h3 {
    color: #271c19;

};
</style>
