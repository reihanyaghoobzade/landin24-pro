<template>
  <main class="flex-1">
    <Header></Header>
    <section class="container mx-auto">
      <product-card></product-card>
    </section>
  </main>
  <Footer></Footer>
  <router-view></router-view>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components : {
    Header,
    ProductCard,
    Footer
  }
};
</script>

<style>
</style>