<script>
import AppLayout from '../../Layouts/AppLayout.vue';

export default {
  name: 'PropertiesIndex',
  components: {
    AppLayout,
  },
  data() {
    return {
      properties: [],
    };
  },
  mounted() {
    this.fetchProperties();
  },
  methods: {
    async fetchProperties() {
      try {
        const response = await fetch('http://localhost:8000/api/properties');
        const responseData = await response.json();

        if (Array.isArray(responseData.data)) {
          this.properties = responseData.data.map(property => ({
            id: property.id,
            name: property.name,
            municipality: property.municipality,
            sidewalk: property.sidewalk
          }));
        } else {
          console.error('La propiedad "data" no es un array:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async deleteProperty(propertyId) {
      try {
        const response = await fetch(`http://localhost:8000/api/properties/${propertyId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          this.properties = this.properties.filter(property => property.id !== propertyId);
        } else {
          console.error('Error deleting property:', response)
        }

      } catch (error) {
        console.error('Error deleting property', error)
      }
    }
  },
};
</script>

<template>
    <AppLayout>
      <div class="m-4 bg-white rounded-md shadow-md">
        <div class="pt-3 w-full bg-blue-700 rounded ">
          <h2 class="ml-3 mb-2 text-2xl text-white font-semibold">Predios</h2>
          <div class="bg-blue-400 grid grid-cols-4 px-4 py-2">
            <p class="text-white">Nombre del predio</p>
            <p class="text-white">Municipio</p>
            <p class="text-white">Vereda</p>
          </div>
        </div>
        <div v-for="property in properties" :key="property.id" class="px-4">
          <div class="grid grid-cols-4 p-4">
            <p class="text-gray-500">{{ property.name }}</p>
            <p class="text-gray-500">{{ property.municipality }}</p>
            <p class="text-gray-500">{{ property.sidewalk }}</p>
            <p class="flex justify-between items-center">
              <a href="" class="mx-2 text-blue-300">Ver detalle</a>
              <i class="fa-regular fa-pen-to-square fa-lg"><a class="mx-2 font-mono text-gray-500 text-sm" href="">Editar</a></i>
              <a @click="deleteProperty(property.id)" class="mx-2 font-light font-mono text-gray-500 text-sm">
                <i class="fa-solid fa-trash fa-lg" style="color: red;"></i> Eliminar
              </a>
            </p>
          </div>
          <hr/>
          </div>
          <div class="p-4 px-16 flex justify-between">
            <a href="" class="text-blue-500"> {{ '<< Anterior' }}</a>
            <a href="" class="text-blue-500">{{ 'Siguiente >>' }}</a>
          </div>
      </div>
    </AppLayout>
</template>

