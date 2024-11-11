<template>
    <div id="app" class="d-flex flex-column min-vh-100">
        <Header />
        <main class="mt-4 flex-grow-1">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>