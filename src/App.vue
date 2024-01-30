<!-- App.vue -->
<script setup>
import AppLayout from './Layouts/AppLayout.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="h-full sm:h-screen bg-slate-100">
    <RouterView/>
  </div>
</template>
