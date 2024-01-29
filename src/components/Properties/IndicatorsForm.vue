<script>
import SelectVisualScore from './SelectVisualScore.vue'

export default {
    name: 'IndicatorsForm',
    components: {
        SelectVisualScore
    },
    data() {
        return {
            formData: {
                structure: 0,
                porosity: 0,
                color: 0,
                horizon_breaking_strength: 0,
                aggregate_stability: 0,
                hardened_layers: 0,
                penetration_resistance: 0,
                infiltration_rate: 0,
                organic_material: 0,
                worms_quantity: 0,
                organisms_quantity: 0,
                root_growth: 0,
                electric_conductivity: 0,
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
                electric_conductivity_evs: 0
            }
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-4 items-center gap-8">
        <p>Indicadores visuales de calidad de suelo</p>
        <p>Puntuación visual</p>
        <p>Ponderación de los indicadores</p>
        <p>Clasificación EVS</p>
    </div>
  <form @submit.prevent="submitForm">
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Estructura y consistencia</label>
        <SelectVisualScore v-model="formData.structure"/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Porosidad</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Color</label>
        <SelectVisualScore/>
        <p>x2</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Resistencia al rompimiento por horizonte</label>
        <SelectVisualScore/>
        <p>x2</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Estabilidad de agregados</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Capas endurecidas</label>
        <SelectVisualScore/>
        <p>x1</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Resistencia a la penetración</label>
        <SelectVisualScore/>
        <p>x2</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Velocidad de infiltración</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Materia orgánica</label>
        <SelectVisualScore/>
        <p>x2</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Cantidad de lombrices</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Cantidad de organismos</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Crecimiento de raíces</label>
        <SelectVisualScore/>
        <p>x3</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
    <div class="grid grid-cols-4 items-center gap-8">
        <label for="">Conductividad eléctrica</label>
        <SelectVisualScore/>
        <p>x2</p>
        <input class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="" id="">
    </div>
  </form>
</template>

