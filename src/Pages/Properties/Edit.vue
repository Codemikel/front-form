<script>
import AppLayout from '../../Layouts/AppLayout.vue'
import PropertyForm from '../../components/Properties/PropertyForm.vue';

export default {
    name: 'PropertyEdit',
    components: {
        AppLayout,
        PropertyForm
    },
    data() {
        return {
            selectedProperty: null, // Asegúrate de ajustar esto según la estructura de tu aplicación
        };
    },
    methods: {
        async fetchData() {
            // Lógica para obtener los datos de la propiedad seleccionada
            // Puedes llamar a una API o realizar cualquier lógica necesaria
            try {
                const response = await fetch(`http://localhost:8000/api/properties/${this.propertyId}/`);
                const data = await response.json();
                this.selectedProperty = data;
            } catch (error) {
                console.error('Error al obtener datos de la propiedad', error);
            }
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>
  <AppLayout>
    <PropertyForm :updating="true" :propertyData="selectedProperty" />
  </AppLayout>
</template>
