<template>
    <button :style="buttonStyles" :title="title" @click="listenClickEvent">
        <!-- Slots will plays a role of placeholders for content within the template -->
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
defineProps({
    title: {
        type: String,
        default: 'click here..'
    }
});

// Emit event when button is clicked
const emit = defineEmits<{
    (event: 'listenClickEvent'): void;
}>();

const listenClickEvent = () => {
    console.log("listenClickEvent****");
    emit('listenClickEvent');
};

const buttonStyles: Record<string, string> = {
    backgroundColor: '#0000ff',
    color: '#ffffff',
    borderColor: '#00f',
    padding: '10px',
    fontSize: '16px',
    margin: '0 10px',
    cursor: 'pointer'
};
</script>