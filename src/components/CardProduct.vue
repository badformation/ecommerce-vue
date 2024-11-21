<template>
    <div class="card p-0 rounded-3 border-0">
        <RouterLink to="/product">
            <a>
                <img class="card-img-top rounded-top-3" :src="image" alt="..."
            /></a>
        </RouterLink>
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">Prix: {{ price }} €</p>
            </div>
            <p class="card-text">{{ description }}</p>
            <div class="d-flex w-100 align-items-center justify-content-center">
                <a href="#" class="btn">🛒</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['id', 'image', 'title', 'price', 'description'])

</script>
