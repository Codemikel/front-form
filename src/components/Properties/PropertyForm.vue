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
        department: '',
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
    async submitForm(data) {
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
    <div class="my-px mx-8 pt-8 px-3 sm:p-8 m-8 bg-white rounded-md shadow-md">
      <h2 class="mb-4 text-center text-xl font-semibold">Formulario</h2>
        
      <FormKit v-if="!showDetailsForm" type="form" @submit="submitForm" submit-label="Guardar Predio" submit-class="p-4 text-blue-200 bg-blue-900" form-class="grid md:grid-cols-2 gap-8 sm:grid-cols-1">
        
        <FormKit
          v-model="formData.department"
          type="select"
          label="Departamento"
          :options="[
            'Amazonas',
            'Antioquia',
            'Arauca',
            'Atlántico',
            'Bogotá, D. C',
            'Bolivar',
            'Boyacá',
            'Caldas',
            'Caquetá',
            'Casanare',
            'Cauca',
            'Cesar',
            'Chocó',
            'Córdoba',
            'Cundinamarca',
            'Guainía',
            'Guaviare',
            'Huila',
            'La Guajira',
            'Magdalena',
            'Meta',
            'Nariño',
            'Norte de Santander',
            'Putumayo',
            'Quindío',
            'Risaralda',
            'San Andrés y Providencia',
            'Santander',
            'Sucre',
            'Tolima',
            'Valle del Cauca',
            'Vaupés',
            'Vichada'
          ]"
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
        />

        <FormKit
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Municipio"
          type="text"
          help="Nombre del municipio"
          validation="required"
          v-model="formData.municipality"
        />
        
        <FormKit 
          outer-class=""
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Vereda"
          type="text"
          help="Nombre de vereda"
          validation="required"
          v-model="formData.sidewalk"
        />

        <FormKit 
          outer-class=""
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm ml-3 text-gray-400"
          label="Nombre de predio"
          type="text"
          help="Nombre de predio."
          validation="required"
          v-model="formData.name"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cultivo analizado"
          type="text"
          help="Ej: Tomate, Papa."
          validation="required"
          v-model="formData.analyzed_crop"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Clima"
          type="text"
          help="Ej: Frío, Cálido."
          validation="required"
          v-model="formData.weather"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Nombre de la cajuela"
          type="text"
          help="Nombre de cajuela"
          validation="required"
          v-model="formData.trunk_name"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Área"
          type="text"
          help="Área en metros"
          validation="required|number"
          v-model="formData.area"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Coordenadas"
          type="text"
          help="Coordenadas del predio"
          validation="required"
          v-model="formData.coordinates"
        />

      </FormKit>
  

      <DetailsForm v-if="showDetailsForm" :propertyId="formData.id"/>
    </div>
  </template>
  
<style>
button {
  background-color: darkblue;
}
</style>