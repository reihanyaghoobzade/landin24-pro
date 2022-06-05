<template>
  <main class="flex-1">
    <Header></Header>
    <section class="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 my-6">
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