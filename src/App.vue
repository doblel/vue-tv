<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink style="margin-left: 20px" to="/show/1">Show details</RouterLink>
  <RouterView /> 
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
