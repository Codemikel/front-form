<script>
import { FormKit } from '@formkit/vue';
import IndicatorsForm from './IndicatorsForm.vue';

export default {
  name: 'DetailsForm',
  components: {
    IndicatorsForm,
    FormKit
},
  props: {
    propertyId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        property_id: this.propertyId,
        class: '',
        type: '',
        consistence: '',
        munsell_table_color: '',
        worm_quantity: '',
        organisms_quantity: '',
        no_munsell_table_color: '',
        organisms: '',
      },
      showIndicatorsForm: false,
    };
  },
  methods: {
    async submitForm(data) {
    try {
        const response = await fetch('http://localhost:8000/api/propertiesTextureDetails/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        this.showIndicatorsForm = true;
      } catch (error) {
        console.error('Error al enviar el formulario', error.message);
      }
    }
  },
  watch: {
    propertyId(newPropertyId) {
      this.formData.property_id = newPropertyId;
    },
  },
};
</script>


<template>
  <FormKit v-if="!showIndicatorsForm" type="form" @submit="submitForm" submit-label="Guardar detalles" submit-class="p-4 text-blue-200 bg-blue-900">
    <h2 class="my-4 text-center text-xl font-semibold">Detalles del predio</h2>
    <div class=" sm:grid grid-cols-3 p-4">
      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Clase textural"
          type="radio"
          :options="[
            'Arenoso',
            'Limoso',
            'Franco',
            'Arcilloso',
            'Otro'
          ]"
          validation="required"
          v-model="formData.class"

      />

      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Tipo de estructura"
          type="radio"
          :options="[
            'Prismáticas',
            'Granulares',
            'Laminar',
            'Columnar',
            'Bloque'
          ]"
          validation="required"
          v-model="formData.type"
      />

      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Tipo de estructura"
          type="radio"
          :options="[
            'Suelto',
            'Firme',
            'Fríable',
            'Extremadamente firme'
          ]"
          validation="required"
          v-model="formData.consistence"
      />
    </div>
    <div class="sm:grid grid-cols-2 p-4 gap-8">
        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Color tabla Munsell"
          type="text"
          validation="required"
          v-model="formData.munsell_table_color"
          :validation-messages="{
            required: 'Color de tabla munsell requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Color sin tabla Munsell"
          type="text"
          validation="required"
          v-model="formData.no_munsell_table_color"
          :validation-messages="{
            required: 'Color sin tabla munsell requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-full w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cantidad de lombrices"
          type="text"
          validation="required|number"
          v-model="formData.worm_quantity"
          :validation-messages="{
            required: 'Cantidad de lombrices requerida',
            number: 'El dato debe ser de tipo numérico'
          }"
        />

        <FormKit 
          outer-class="row-start-2 row-end-4 col-start-2 col-end-3 h-full w-full"
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-32 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="¿Cuáles son los organismos que evidencia?"
          type="text"
          validation="required"
          v-model="formData.organisms"
          :validation-messages="{
            required: 'Organismos que se ven son requeridos'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cantidad de organismos"
          type="text"
          validation="required|number"
          v-model="formData.organisms_quantity"
          :validation-messages="{
            required: 'Cantidad de gusanos requerida',
            number: 'El dato debe ser de tipo numérico'
          }"
        />

    </div>
  </FormKit>
  <IndicatorsForm v-if="showIndicatorsForm" :propertyId="formData.property_id"/>
</template>