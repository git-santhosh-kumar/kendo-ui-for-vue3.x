<template>
  <AppBar>
      <AppBarSection>
        <kendo-button :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      </AppBarSection>

      <AppBarSpacer :width="4" />

      <AppBarSection>
        <h1 className="title" style="margin: 0">Kendo UI</h1>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection class="actions">
        <Avatar type="image">
          <img src="https://www.telerik.com/kendo-vue-ui/components/layout/assets/appbar/kendoka-vue.png" alt="User Profile" />
        </Avatar>

        &nbsp;&nbsp;

        <span class="k-appbar-separator" />

        &nbsp; <span>v{{ appVersion }}</span>
      </AppBarSection>
    </AppBar>
</template>

<script lang="ts">
import { 
  AppBar, 
  AppBarSection,
  AppBarSpacer,
  Avatar 
} from "@progress/kendo-vue-layout";

import {
  menuIcon
} from "@progress/kendo-svg-icons";

import pkgJson from "../../package.json";

export default {
  name: "HeaderBand",
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar
  },
  data() {
    return {
      appVersion: pkgJson.version,
      menuIcon
    }
  },
  methods: {
    handleClick() {
      console.log("handleClick Event triggered");
      this.$emit("handleClickEvent");
    }
  }
}
</script>

<style>

</style>