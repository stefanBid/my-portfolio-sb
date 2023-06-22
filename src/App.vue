<script setup lang="ts">
import { ref } from 'vue';
const key = ref('')
</script>

<template>
  <AppButton custom="classic" outline >
    <template #default>
      Download CV
    </template>
    <template #icon>
      <IconMdiDownloadCircleOutline class="w-10 h-10 group-hover:animate-spin" />
    </template>
  </AppButton>
  <AppButton custom="classic" >
    <template #default>
      Download CV
    </template>
    <template #icon>
      <IconMdiDownloadCircleOutline class="w-10 h-10 group-hover:animate-spin" />
    </template>
  </AppButton>
  <AppButton custom="minimal" outline >
    <template #default>
      Download CV
    </template>
    <template #icon>
      <IconMdiDownloadCircleOutline class="w-10 h-10 group-hover:animate-spin" />
    </template>
  </AppButton>
  <AppButton custom="minimal" >
      <template #default>
        Download CV
      </template>
      <template #icon>
        <IconMdiDownloadCircleOutline class="w-12 h-12 group-hover:animate-spin" />
      </template>
  </AppButton>
  <div class="block space-x-8">
    <AppButton custom="minimal" outline  rounded >
        <template #icon>
          <IconMdiLinkedin class="w-16 h-16 group-hover:animate-spin" />
        </template>
    </AppButton>
    <AppButton custom="classic" rounded>
          <template #icon>
            <IconMdiDownloadCircleOutline class="w-16 h-16 group-hover:animate-spin" />
          </template>
    </AppButton>
  </div>
  <div class="block mt-10">
    <AppSearchBar v-model="key"/>
    <p> Key: {{ key }}</p>
  </div>

  <AppTitle placement="left" size="lg">
    <template #default>
      Hello
    </template>
    <template #pretty>
      World
    </template>
  </AppTitle>
<div class="w-[50%]">
  <AppParagraph placement="left" size="sm">
    <template #default>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Doloremque blanditiis voluptas molestias aspernatur aliquid accusantium facilis officia laboriosam, obcaecati porro magni ratione autem fugit culpa corrupti quis libero eaque repudiandae.
    </template>
  </AppParagraph>
</div>
</template>

<style scoped>

</style>
