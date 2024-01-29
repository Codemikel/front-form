<script>
import DetailsForm from './DetailsForm.vue';

export default {
  name: 'PropertyForm',
  components: {
    DetailsForm,
  },
  data() {
    return {
      formData: {
        municipality: '',
        sidewalk: '',
        name: '',
        analyzed_crop: '',
        weather: '',
        trunk_name: '',
        area: 0,
        coordinates: '',
      },
      showDetailsForm: false,
      propertyId: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8000/api/properties/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const data = await response.json();
        console.log(data);
        this.formData.id = data.id;

        // Asignar el propertyId y mostrar el DetailsForm
        this.propertyId = this.formData.id;
        this.showDetailsForm = true;
      } catch (error) {
        console.error('Error al enviar el formulario', error);
      }
    },
  },
};
</script>

<template>
    <div class="p-8 m-8 bg-white rounded-md shadow-md">
      <h2 class="text-center text-xl font-semibold">Formulario</h2>
    
      <form v-if="!showDetailsForm" @submit.prevent="submitForm" class="grid grid-cols-2 grid-rows-4 p-4">
        
        <div class="p-2">
          <label class="text-lg text-gray-700" for="municipio">Municipio</label>
          <input v-model="formData.municipality" id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="vereda">Vereda</label>
          <input v-model="formData.sidewalk" id="vereda" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="nombre_predio">Nombre del predio</label>
          <input v-model="formData.name" id="nombre_predio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="cultivo_analizado">Cultivo analizado</label>
          <input v-model="formData.analyzed_crop" id="cultivo_analizado" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="clima">Clima</label>
          <input v-model="formData.weather" id="clima" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="nombre_cajuela">Nombre de la cajuela</label>
          <input v-model="formData.trunk_name" id="nombre_cajuela" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="area_cultivo">Área del cultivo</label>
          <input v-model="formData.area" id="area_cultivo" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="coordenadas">Coordenadas</label>
          <input v-model="formData.coordinates" id="coordenadas" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <button type="submit" class="text-white py-2 bg-blue-900 rounded w-1/4 hover:bg-blue-950">
          Enviar
        </button>
      </form>

      <DetailsForm v-if="showDetailsForm" :propertyId="formData.id"/>
    </div>
  </template>
  