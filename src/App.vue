<script setup lang="ts">
import { onMounted } from "vue"
import CounterCard from './components/CounterCard.vue'

// lifecycle hooks
onMounted(() => {
  console.log(`App component mounted!`);
});
</script>

<template>  
  <h1>Welcome page!</h1>
  <counter-card></counter-card>
</template>
