<template>
    <Header />
    <main class="mt-4">
        <RouterView />
    </main>
    <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>