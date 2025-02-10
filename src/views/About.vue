<template>
  <h1>About Page</h1>

  <CustomButton title="Click on this button to know more.." @listenClickEvent="listenerClickEvent">Click Me</CustomButton>

</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
import { useFetch } from '@/Composables/api-fetch';

async function listenerClickEvent() {
  console.log("listenerClickEvent**");

  const users = await useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET"
  });

  console.log("users: ", users);
}
</script>

<style>

</style>