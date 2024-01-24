<script>
export default {
  name: 'OrdersIndex',
  data() {
    return {
      showDetailsForm: false,
    };
  },
  methods: {
    showDetails() {
      this.showDetailsForm = true;
    },
  },
};
</script>

<script setup>
import Header from '../../components/Header.vue';
import DetailsForm from '../../components/Properties/DetailsForm.vue';
import PropertyForm from '../../components/Properties/PropertyForm.vue';
</script>

<template>
  <div>
    <Header />
    <PropertyForm @showDetails="showDetails" v-if="!showDetailsForm" />
    <DetailsForm v-if="showDetailsForm" />
  </div>
</template>
