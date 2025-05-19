<script>
/**
 * @component Home
 * @summary Main home page component displaying a welcome message and registered events.
 * @description This Vue component serves as the home page, showing a greeting and embedding the RegisteredEvents and ToolbarContent components.
 * @author Daniel Crispin Ramos
 */

import ToolbarContent from "../components/toolbar-content.component.vue";
import RegisteredEvents from "../../registration/components/registered-events.component.vue";

export default {
  name: "home",
  components: {RegisteredEvents, ToolbarContent}
}
</script>

<template>
  <h1>Home</h1>
  <p>Welcome to Eventify</p>
  <registered-events/>
</template>

<style scoped>

</style>