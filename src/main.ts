import { createApp } from 'vue'
import App from './App.vue'
import { setScriptKey } from '@progress/kendo-licensing';

setScriptKey('eyJhbGciOiJSUzI1NiIsInR5cCI6IkxJQyJ9.eyJwcm9kdWN0cyI6W3sidHJpYWwiOmZhbHNlLCJjb2RlIjoiS0VORE9VSVJFQUNUIiwibGljZW5zZUV4cGlyYXRpb25EYXRlIjoxNzYzMTYzMTk5fSx7InRyaWFsIjpmYWxzZSwiY29kZSI6IktFTkRPVUlDT01QTEVURSIsImxpY2Vuc2VFeHBpcmF0aW9uRGF0ZSI6MTc2MzE2MzE5OX0seyJ0cmlhbCI6ZmFsc2UsImNvZGUiOiJLRU5ET1VJVlVFIiwibGljZW5zZUV4cGlyYXRpb25EYXRlIjoxNzYzMTYzMTk5fSx7InRyaWFsIjpmYWxzZSwiY29kZSI6IktFTkRPVUlBTkdVTEFSIiwibGljZW5zZUV4cGlyYXRpb25EYXRlIjoxNzYzMTYzMTk5fV0sImludGVncml0eSI6IllYdzBZRXFqQmZ5ajVCT3RBOEJIcFFDa3dWMD0iLCJsaWNlbnNlSG9sZGVyIjoic2FudGhvc2hrdW1hckB2aW5jZS5ubyIsImlhdCI6MTcyOTA2MDE4NSwiYXVkIjoic2FudGhvc2hrdW1hckB2aW5jZS5ubyIsInVzZXJJZCI6IjM0MzU4YmMxLTllNjAtNDdmMy1hOWRjLWJiYWExYWMyNTdlMCJ9.b2vyt8e3uF62QY2NgPX8fRIKfNWGrpqRni2y72Jk8bPU1fwTX37pPw-o3hOr9YYO4A11H5PHocxhq_CoBwg8M0n33VEIH3xVTWEy4ZNX5uEJfrVFMT5YSTH7V9zP3pOaJJ2OdDKjPk2KDuYhrokr6gVHrmHlNM_8WIyIyHwYrf_Rk5D4v5FN-OXNxStwhmlGzcx8OStmOhKYblsVJ5NT6kWFBwW4ytI-hRgyskcz7tPAbIrepJBON2WCuRfY-bX_0yHKAiXpOU5RS04l2QvkP4zCqMeYeqnsqmkWlUroLmghwEQSUKH3WAUe4j1pn4mwRnVEc9eIejQ7iTspH75u-Q');

import '@progress/kendo-theme-default/dist/all.css';
import './style.css'

// Import Kendo components
import { Grid } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';

const app = createApp(App);

// Register Kendo components globally
app.component('kendo-grid', Grid);
app.component('kendo-button', Button);

// Mount the app component.
app.mount('#app')