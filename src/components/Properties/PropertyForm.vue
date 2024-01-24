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
        municipio: '',
        vereda: '',
        nombre_predio: '',
        cultivo_analizado: '',
        clima: '',
        nombre_cajuela: '',
        area_cultivo: '',
        coordenadas: '',
      },
      showDetailsForm: false
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8000/cultivos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        const data = await response.json();
        console.log(data);
        
        this.$emit('showDetails');
      } catch (error) {
        console.error('Error al enviar el formulario', error);
      }
    },
  },
};
</script>

<template>
    <div>
      <h2 class="my-4 text-center text-xl font-semibold">Formulario</h2>
      
      
      <form v-if="!showDetailsForm" @submit.prevent="submitForm" class="grid grid-cols-2 grid-rows-4 p-4">
        
        <div class="p-2">
          <label class="text-lg text-gray-700" for="municipio">Municipio</label>
          <input v-model="formData.municipio" id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="vereda">Vereda</label>
          <input v-model="formData.vereda" id="vereda" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="nombre_predio">Nombre del predio</label>
          <input v-model="formData.nombre_predio" id="nombre_predio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="cultivo_analizado">Cultivo analizado</label>
          <input v-model="formData.cultivo_analizado" id="cultivo_analizado" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="clima">Clima</label>
          <input v-model="formData.clima" id="clima" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="nombre_cajuela">Nombre de la cajuela</label>
          <input v-model="formData.nombre_cajuela" id="nombre_cajuela" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="area_cultivo">Área del cultivo</label>
          <input v-model="formData.area_cultivo" id="area_cultivo" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <div class="p-2">
          <label class="text-lg text-gray-700" for="coordenadas">Coordenadas</label>
          <input v-model="formData.coordenadas" id="coordenadas" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
  
        <button type="submit" class="text-white py-2 bg-blue-900 rounded w-1/4 hover:bg-blue-950">
          Enviar
        </button>
      </form>

      <DetailsForm v-if="showDetailsForm" />
    </div>
  </template>
  