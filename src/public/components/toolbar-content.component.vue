<script>
import LanguageSwitcher from "./language-switcher.component.vue";


export default {
  name: "toolbar-content",
  components: {LanguageSwitcher},
  data() {
    return {
      logoUrl: "https://logo.clearbit.com/eventify.io"
    }
  }
}
</script>

<template>
  <pv-toolbar>
    <template #start>
      <!-- Izquierda: Logo + texto -->
      <div class="toolbar-left" role="banner">
        <img :src="logoUrl" alt="Eventify logo" class="toolbar-logo" aria-hidden="true" />
        <span class="toolbar-text">ISO 27001:2022 certified</span>
      </div>
    </template>
    <template #center>
      <!-- Centro: Navegación -->
      <nav class="toolbar-center" role="navigation" aria-label="Primary navigation">
        <router-link to="/home" class="nav-link">Home</router-link>
        <router-link to="/registration/event-check-ins/new" class="nav-link">Check-In</router-link>
      </nav>
    </template>
    <template #end>
      <!-- Derecha: Cambiar idioma -->
      <language-switcher />
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toolbar-logo {
  height: 40px;
  width: auto;
}

.toolbar-text {
  color: rgba(255, 255, 255, 0.88);
  font-weight: 500;
  font-size: 1rem;
}

.toolbar-center {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
}

.nav-link {
  font-weight: 600;
  color: #9a9a9a;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link[aria-current="page"] {
  font-weight: 700;
  background-color: #007ad9; /* azul primario */
  color: white;
}

.nav-link:hover {
  background-color: #3791ff; /* azul más claro para hover */
  color: white;
}

</style>