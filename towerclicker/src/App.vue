<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to = "/">home</RouterLink>
    <RouterLink to = "/about">about</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav{
  display: flex;
  position: absolute;
  z-index: 2;
  gap: 50px;
  
}
</style>
