<template>
  <section style="padding: 0 10px;">
    <h1>Home Page</h1>

    <!-- binding and computed props -->
    <div>
      <label>First Name</label><br />
      <input type="text" v-model="firstName" @change="handleChange" />
    </div>

    <div>
      <label>Last Name</label><br />
      <input type="text" v-model="lastName" @change="handleChange" />
    </div>

    <p>Full Name: {{ fullName }}</p>

    <!-- class bindings -->
    <div>
      <label>Activate User</label><br/>
      <input type="checkbox" name="isActive" v-model="isActive" />

      <br/>

      <em :class="classObject">User is Active ):</em>

    </div>

    <!-- css style bindings -->
    <div>
      <label :style="{ 'font-size': fontSize + 'px' }">Welcome to Vue Class Style Bindings.</label><br/>
      <button @click="fontSize++">Clik here to Increase Font size</button>&nbsp;
      <button @click="fontSize--">Clik here to decrease Font size</button>
      
    </div>
    <br/>

    <!-- conditional rendering -->
    <div>
      <button @click="awesome = !awesome">Toggle</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <div>
      <label>Phone No.:</label><br/>
      <input type="text" 
        @keypress.exact.enter="keyPressHandler"
        v-model="phoneNumber"
        placeholder="press enter key to trigger event">
    </div>
    
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue';

const firstName = ref("Santhosh");
const lastName = ref("Kumar");
const isActive = ref(false);
const classObject = reactive({
  'text-success': isActive
});

const fontSize = ref(14);

function handleChange(event: any) {
  console.log("handle change event ", event.target.value);
  console.log("firstName: ", firstName.value);
  console.log("lastName: ", lastName.value);
};

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
})

const awesome = ref(false);

function keyPressHandler(event: any) {
  console.log("keyCode: ", event.keyCode)
  console.log("key value: ", event.target.value)
  alert(`You have entered: ${event.target.value}`)
}

const phoneNumber = ref(null);

// watcher for phone number
watch(phoneNumber, () => {
  console.log(`Phone number from watcher: ${phoneNumber.value}`)
});

watch(fullName, (newVal) => {
  console.log("Full name watcher: ", newVal);
},
{
  immediate: true // executed immediately
})

</script>

<style>
input[type='text'] {
  padding: 8px;
  font-size: 16px;
  width: -webkit-fill-available;
}

.text-danger {
  color: #ff0000;
}

.text-success {
  color: #00a300;
}

</style>