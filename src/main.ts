import { createApp } from 'vue'
import App from './App.vue'

import '@progress/kendo-theme-default/dist/all.css';
import './style.css'

// Import Kendo components
import { Grid } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import router from './router';

const app = createApp(App);

// Register Kendo components globally
app.component('kendo-grid', Grid);
app.component('kendo-button', Button);

app.use(router); // Add router to app

// Mount the app component.
app.mount('#app');