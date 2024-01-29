<script>
export default {
    name: 'Header'
}
</script>

<template>
  <div class="py-4 px-8 flex justify-between bg-blue-950">
        <router-link to="/" class="text-xl text-white font-sans font-semibold ">Predios</router-link>
        <nav>
            <router-link to="/form" class="py-3 px-4 rounded-md bg-white text-blue-950 font-sans hover:bg-slate-100">Registrar predio</router-link>
        </nav>
    </div>
</template>