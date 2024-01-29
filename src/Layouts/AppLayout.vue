<script>
export default {
    name: 'AppLayout'
}
</script>

<script setup>
import Header from '../components/Header.vue';
</script>

<template>
  <Header />
  <div class="container mx-auto mt-4">
    <slot></slot>
  </div>
</template>