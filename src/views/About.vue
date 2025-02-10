<template>
  <h1>About Page</h1>

  <CustomButton title="Click on this button to know more.." @listenClickEvent="listenerClickEvent">Click Me</CustomButton>

</template>

<script setup>
import { getCurrentInstance } from 'vue';
import CustomButton from '@/components/CustomButton.vue';
import { useFetch } from '@/Composables/api-fetch';

const instance = getCurrentInstance();

async function listenerClickEvent() {
  console.log("listenerClickEvent**");

  const users = await useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET"
  });
  console.log("users: ", users);
  
  instance?.proxy?.$posthog.capture('button_click_from_about_page', 
    { 
      message: 'User api called.',
      itemCount: users.data?.length 
    }
  );
}
</script>

<style>

</style>