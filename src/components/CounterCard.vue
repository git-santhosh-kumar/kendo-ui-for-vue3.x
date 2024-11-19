<template>
    <h2>Counter Card</h2>
  <p>Counter: {{ counter }}</p>
  <div>
    <button @click="counter++">Increment</button> &nbsp; &nbsp;
    <button @click="() => counter === 0 ? counter : counter--">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue"

// Reactive variable with explicit type declaration
const counter = ref<number>(5);

// lifecycle hooks
onMounted(() => {
  console.log("counter initial value: ", counter.value);
});

// Watcher
watch(counter, (newVal, oldVal) => {
  console.log("watcher for counter - newVal: ", newVal);
  console.log("watcher for counter - oldVal: ", oldVal)
})
</script>

<style>

</style>