<script>
  import SelectVisualScore from './SelectVisualScore.vue';
  
  export default {
    name: 'IndicatorsForm',
    components: {
      SelectVisualScore,
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
          structure: null,
          porosity: null,
          color: null,
          horizon_breaking_strength: null,
          aggregate_stability: null,
          hardened_layers: null,
          penetration_resistance: null,
          infiltration_rate: null,
          organic_material: null,
          worms_quantity: null,
          organisms_quantity: null,
          root_growth: null,
          electric_conductivity: null,
          structure_evs: 0,
          porosity_evs: 0,
          color_evs: 0,
          horizon_breaking_strength_evs: 0,
          aggregate_stability_evs: 0,
          hardened_layers_evs: 0,
          penetration_resistance_evs: 0,
          infiltration_rate_evs: 0,
          organic_material_evs: 0,
          worms_quantity_evs: 0,
          organisms_quantity_evs: 0,
          root_growth_evs: 0,
          electric_conductivity_evs: 0,
        },
        formFields: [
          { key: 'structure', label: 'Estructura y consistencia', weight: 3 },
          { key: 'porosity', label: 'Porosidad', weight: 3 },
          { key: 'color', label: 'Color', weight: 2 },
          { key: 'horizon_breaking_strength', label: 'Resistencia al rompimiento por horizonte', weight: 2 },
          { key: 'aggregate_stability', label: 'Estabilidad de agregados', weight: 2 },
          { key: 'hardened_layers', label: 'Capas endurecidas', weight: 2 },
          { key: 'penetration_resistance', label: 'Resistencia a la penetración', weight: 2 },
          { key: 'infiltration_rate', label: 'Velocidad de infiltración', weight: 2 },
          { key: 'organic_material', label: 'Materia orgánica', weight: 2 },
          { key: 'worms_quantity', label: 'Cantidad de lombrices', weight: 2 },
          { key: 'organisms_quantity', label: 'Cantidad de organismos', weight: 2 },
          { key: 'root_growth', label: 'Crecimiento de raíces', weight: 2 },
          { key: 'electric_conductivity', label: 'Conductividad eléctrica', weight: 2 }
        ],
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:8000/api/propertiesVisualDetails/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
          });
          const data = await response.json();
          console.log(data);
          this.formData.propertyId = data.propertyId;
  
          this.propertyId = this.formData.propertyId;
        } catch (error) {
          console.error('Error al enviar el formulario', error);
        }
      },
      updateEVS(fieldName) {
        // Manejar el valor seleccionado según el campo
        // En este caso, se actualiza automáticamente en el evento score-selected
      },
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
    <div>
      <div class="grid grid-cols-4 items-center gap-8">
        <p>Indicadores visuales de calidad de suelo</p>
        <p>Puntuación visual</p>
        <p>Ponderación de los indicadores</p>
        <p>Clasificación EVS</p>
      </div>
      <form @submit.prevent="submitForm">
        <div v-for="(field, index) in formFields" :key="index" class="grid grid-cols-4 items-center gap-8">
          <label :for="field.key">{{ field.label }}</label>
          <SelectVisualScore v-model="formData[field.key]" @score-selected="updateEVS(field.key)" />
          <p>x{{ field.weight }}</p>
          <input v-model="formData[`${field.key}_evs`]" class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text">
        </div>
        <button type="submit" class="text-white py-2 bg-blue-900 rounded w-1/4 hover:bg-blue-950">
          Finalizar
        </button>
      </form>
    </div>
</template>