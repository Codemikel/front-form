<script>
import AppLayout from '../../Layouts/AppLayout.vue'
import PropertyForm from '../../components/Properties/PropertyForm.vue';
export default {
    name: 'MainForm',
    components: {
        AppLayout,
        PropertyForm,
    }
}
</script>

<template>
  <AppLayout>
    <PropertyForm/>
  </AppLayout>
</template>

