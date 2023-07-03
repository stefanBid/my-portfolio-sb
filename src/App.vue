<script setup lang="ts">
import TheNavBar from './components/TheNavBar';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import { useTitle } from '@vueuse/core';

const title = useTitle();
const router = useRouter();

const changeTitle = () => {
  title.value = 'Stefano Biddau';
  let titleApp = ` | `;
  switch (router.currentRoute.value.name) {
    case 'home':
      titleApp += 'HomePage';
      break;
    case 'about':
      titleApp += 'About Me';
      break;
    case 'skills':
      titleApp += 'My Skills';
      break;
    case 'works':
      titleApp += 'My Works';
      break;
    default:
      titleApp += 'Home';
      break;
  }
  title.value += titleApp;
};

watch(
  // 1) Watch the router.currentRoute.value.name
  () => router.currentRoute?.value.name,
  // 2) Change the document.title accordingly to the router.currentRoute.value.name
  () => {
    changeTitle();
  }
);
</script>

<template>
  <TheNavBar />
  <RouterView />
</template>

