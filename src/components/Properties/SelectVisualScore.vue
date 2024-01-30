<template>
  <select
    v-model="selectedScore"
    class="mb-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option v-for="score in scores" :key="score" :value="score">{{ score }}</option>
  </select>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      selectedScore: this.value,
      scores: ['0', '0.5', '1', '1.5', '2'],
    };
  },
  watch: {
    selectedScore() {
      this.$emit('input', this.selectedScore);
      this.$emit('score-selected', this.selectedScore);
    },
  },
};
</script>
