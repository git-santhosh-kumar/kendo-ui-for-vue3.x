import { createApp, nextTick } from 'vue'
import App from './App.vue'
// import SecondApp from './SecondApp.vue'

import '@progress/kendo-theme-default/dist/all.css';
import './style.css'

// Import Kendo components
import { Grid } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import router from './router';

import posthogPlugin from "./plugins/posthog"; //import the plugin.

const app = createApp(App);

// const secondApp = createApp(SecondApp);

// Register Kendo components globally
app.component('kendo-grid', Grid);
app.component('kendo-button', Button);

app.use(router); // Add router to app

app.use(posthogPlugin); //install the plugin

// Mount the app component.
app.mount('#app');

// We can mount multiple apps under same project.
// secondApp.mount("#second-app")

router.afterEach((to, from, failure) => {
    if(!failure) {
        nextTick(() => {
            app.config.globalProperties.$posthog.capture('$pageview', {
                path: to.fullPath
            })
        })
    }
})