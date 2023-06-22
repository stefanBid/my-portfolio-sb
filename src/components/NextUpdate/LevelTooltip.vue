<template>
  <!--Tooltip Container-->
  <div class="inline-block">
    <!--Button with tooltip-->
    <AppButton ref="referenceRef" custom="classic"  @mouseenter="showFloating"
      @mouseleave="hideFloating">
      <template #default>
        Show level
      </template>
    </AppButton>
    <!--Tooltip-->
    <div ref="floatingRef" :class="[
      'bg-secondary border-2 border-white border-solid text-2xl py-4 px-3 duration-300 ease-in out rounded-lg',
      isShowed ? 'opacity-100' : 'opacity-0',
    ]" :style="floatingStyles">
      <div class="space-x-3">
        <IconMdiDecagram class="inline-block w-8 h-8 text-primary" />
        <IconMdiDecagram class="inline-block w-8 h-8 text-primary" />
        <IconMdiDecagram class="inline-block w-8 h-8 text-primary" />
        <IconMdiDecagramOutline class="inline-block w-8 h-8 text-primary" />
        <IconMdiDecagramOutline class="inline-block w-8 h-8 text-primary" />
        (3/5)
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Imports
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/vue'
import { ref } from 'vue';


//Define Tooltip logic
//Data
const referenceRef = ref(null);
const floatingRef = ref(null);
const isShowed = ref(false);

//Methods
const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: 'bottom',
  transform: false,
  whileElementsMounted: autoUpdate,
  middleware: [offset(6), flip(), shift()]
});


const showFloating = () => {
  isShowed.value = true;
};

const hideFloating = () => {
  setTimeout(() => {
    isShowed.value = false;
  }, 200);
};

</script>