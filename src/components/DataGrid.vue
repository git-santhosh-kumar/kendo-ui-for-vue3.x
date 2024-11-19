<template>
  <h1>Kendo Data Grid</h1>
  {{  products }}
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

    const products = ref([]);
    const columns = ref([
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' }
    ]);

    onMounted(() => {
        console.log("Mounted hook!");

        const productsList = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => products.value = json);     

    })

</script>

<style>

</style>