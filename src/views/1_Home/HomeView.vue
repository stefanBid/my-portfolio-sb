<template>
  <div class="mt-[50rem]">
    <TipedText :words="words"/>
  </div>
</template>

<script setup lang="ts">
import TipedText from './components/TipedText';
const words = ['Front-end developer', 'Back-end developer', 'Content creator'];

</script>