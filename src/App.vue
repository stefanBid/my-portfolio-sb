<script setup lang="ts">
import TheNavBar from './components/TheNavBar';
import TheSection from './components/TheSection';
</script>

<template>
  <TheNavBar />
  <TheSection  :subsectionDistance="10">
    <template #default>
      <h1>Prova 1</h1>
    </template>
    <template #next>
      <h2>Prova 2</h2>
    </template>
  </TheSection>
</template>

