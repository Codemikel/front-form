<script>
import IndicatorsForm from './IndicatorsForm.vue';  // Asegúrate de ajustar la ruta correcta

export default {
  name: 'DetailsForm',
  components: {
    IndicatorsForm,
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
    async submitForm() {
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

        // Ahora que el formulario se ha enviado con éxito, mostrar IndicatorsForm
        this.showIndicatorsForm = true;
      } catch (error) {
        console.error('Error al enviar el formulario', error.message);
      }
    }
  },
  watch: {
    // Observar cambios en la propiedad propertyId y actualizar formData
    propertyId(newPropertyId) {
      this.formData.property_id = newPropertyId;
    },
  },
};
</script>


<template>
  <form v-if="!showIndicatorsForm" @submit.prevent="submitForm">
    <h2 class="my-4 text-center text-xl font-semibold">Detalles del predio</h2>
    <div class="grid grid-cols-3 p-4">
      <div class="p-2">
        <label class="text-lg text-gray-700" for="">Clase textural</label>
        <div>
          <input v-model="formData.class" type="radio" name="class" id="arenoso" value="arenoso" >
          <label for="arenoso">Arenoso</label>
        </div>
        <div>
            <input v-model="formData.class" type="radio" name="class" id="limoso" value="limoso" >
            <label for="limoso">Limoso</label>
        </div>
        <div>
            <input v-model="formData.class" type="radio" name="class" id="franco" value="franco" >
            <label for="franco">Franco</label>
        </div>
        <div>
            <input v-model="formData.class" type="radio" name="class" id="arcilloso" value="arcilloso" >
            <label for="arcilloso">Arcilloso</label>
        </div>
        <div>
            <input v-model="formData.class" type="radio" name="class" id="otro" value="otro" >
            <label for="otro">Otro</label>
        </div>
      </div>
      <div class="p-2">
        <label class="text-lg text-gray-700" for="">Clase textural</label>
        <div>
          <input v-model="formData.type" type="radio" name="type" id="prismaticas" value="prismaticas">
          <label for="prismaticas">Prismáticas</label>
        </div>
        <div>
          <input v-model="formData.type" type="radio" name="type" id="bloque" value="bloque">
          <label for="bloque">Bloque</label>
        </div>
        <div>
          <input v-model="formData.type" type="radio" name="type" id="granulares" value="granulares">
          <label for="granulares">Granulares</label>
        </div>
        <div>
          <input v-model="formData.type" type="radio" name="type" id="laminar" value="laminar">
          <label for="laminar">Laminar</label>
        </div>
        <div>
          <input v-model="formData.type" type="radio" name="type" id="columnar" value="columnar">
          <label for="columnar">Columnar</label>
        </div>
      </div>
      <div class="p-2">
        <label class="text-lg text-gray-700" for="">Consistencia</label>
        <div>
          <input v-model="formData.consistence" type="radio" name="consistence" id="Suelto" value="Suelto">
          <label for="Suelto">Suelto</label>
        </div>
        <div>
          <input v-model="formData.consistence" type="radio" name="consistence" id="Firme" value="Firme">
          <label for="Firme">Firme</label>
        </div>
        <div>
          <input v-model="formData.consistence" type="radio" name="consistence" id="Friable" value="Friable">
          <label for="Friable">Friable</label>
        </div>
        <div>
          <input v-model="formData.consistence" type="radio" name="consistence" id="Extremadamente Firme" value="Extremadamente Firme">
          <label for="Extremadamente Firme">Extremadamente Firme</label>
        </div>
      </div>
    </div>
      <div class="grid grid-cols-2 p-4">
        <div class="p-2">
          <label class="text-lg text-gray-700" for="munsell_table_color">Color tabla Munsell</label>
          <input  v-model="formData.munsell_table_color" id="munsell_table_color" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
        <div class="p-2">
          <label class="text-lg text-gray-700" for="no_munsell_table_color">Color sin tabla Munsell</label>
          <input  v-model="formData.no_munsell_table_color" id="no_munsell_table_color" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
        <div class="p-2">
          <label class="text-lg text-gray-700" for="worm_quantity">Cantidad de lombrices</label>
          <input  v-model="formData.worm_quantity" id="worm_quantity" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
        <div class="p-2">
          <label class="text-lg text-gray-700" for="organisms">¿Cuáles son los organismos que evidencia?</label>
          <input  v-model="formData.organisms" id="organisms" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
        <div class="p-2">
          <label class="text-lg text-gray-700" for="organisms_quantity">Cantidad de organismos</label>
          <input  v-model="formData.organisms_quantity" id="organisms_quantity" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
        </div>
    </div>
      <button type="submit" class="text-white py-2 bg-blue-900 rounded w-1/4 hover:bg-blue-950">Siguiente</button>
  </form>
  <IndicatorsForm v-if="showIndicatorsForm" :propertyId="formData.property_id"/>
</template>