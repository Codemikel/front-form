<script>
export default {
    name: 'DetailsForm'
}
</script>

<script setup>

</script>

<template>
    <h2 class="my-4 text-center text-xl font-semibold">Detalles del predio</h2>
    <form class="">
        <div class="grid grid-cols-3 p-4">
            <div class="p-2">
                <label class="text-lg text-gray-700" for="">Clase textural</label>
                <div>
                    <input type="radio" name="textural" id="arenoso" value="arenoso" >
                    <label for="arenoso">Arenoso</label>
                </div>
                <div>
                    <input type="radio" name="textural" id="limoso" value="limoso" >
                    <label for="limoso">Limoso</label>
                </div>
                <div>
                    <input type="radio" name="textural" id="franco" value="franco" >
                    <label for="franco">Franco</label>
                </div>
                <div>
                    <input type="radio" name="textural" id="arcilloso" value="arcilloso" >
                    <label for="arcilloso">Arcilloso</label>
                </div>
                <div>
                    <input type="radio" name="textural" id="otro" value="otro" >
                    <label for="otro">Otro</label>
                </div>
            </div>
            <div class="p-2">
                <label class="text-lg text-gray-700" for="">Clase textural</label>
                <div>
                    <input type="radio" name="structure" id="prismaticas" value="prismaticas">
                    <label for="prismaticas">Prismáticas</label>
                </div>
                <div>
                    <input type="radio" name="structure" id="bloque" value="bloque">
                    <label for="bloque">Bloque</label>
                </div>
                <div>
                    <input type="radio" name="structure" id="granulares" value="granulares">
                    <label for="granulares">Granulares</label>
                </div>
                <div>
                    <input type="radio" name="structure" id="laminar" value="laminar">
                    <label for="laminar">Laminar</label>
                </div>
                <div>
                    <input type="radio" name="structure" id="columnar" value="columnar">
                    <label for="columnar">Columnar</label>
                </div>
            </div>
            <div class="p-2">
                <label class="text-lg text-gray-700" for="">Consistencia</label>
                <div>
                    <input type="radio" name="consistence" id="Suelto" value="Suelto">
                    <label for="Suelto">Suelto</label>
                </div>
                <div>
                    <input type="radio" name="consistence" id="Firme" value="Firme">
                    <label for="Firme">Firme</label>
                </div>
                <div>
                    <input type="radio" name="consistence" id="Friable" value="Friable">
                    <label for="Friable">Friable</label>
                </div>
                <div>
                    <input type="radio" name="consistence" id="Extremadamente Firme" value="Extremadamente Firme">
                    <label for="Extremadamente Firme">Extremadamente Firme</label>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 p-4">
            <div class="p-2">
                <label class="text-lg text-gray-700" for="municipio">Color tabla Munsell</label>
                <input  id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
            </div>

            <div class="p-2">
                <label class="text-lg text-gray-700" for="municipio">Color sin tabla Munsell</label>
                <input  id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
            </div>
            
            <div class="p-2">
                <label class="text-lg text-gray-700" for="municipio">Cantidad de lombrices</label>
                <input  id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
            </div>
            
            <div class="p-2">
                <label class="text-lg text-gray-700" for="municipio">¿Cuáles son los organismos que evidencia?</label>
                <input  id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
            </div>

            <div class="p-2">
                <label class="text-lg text-gray-700" for="municipio">Cantidad de organismos</label>
                <input  id="municipio" class="my-3 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm" type="text">
            </div>
        </div>
        <button class="text-white py-2 bg-blue-900 rounded w-1/4 hover:bg-blue-950">Siguiente</button>
    </form>
</template>