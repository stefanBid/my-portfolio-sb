<template>
  <!--Tooltip Container-->
  <div class="inline-block">
    <!--Button with tooltip-->
    <AppButton ref="referenceRef" custom="minimal" class="p-[0px]" rounded outline @mouseenter="showFloating"
      @mouseleave="hideFloating">
      <template #icon>
        <IconMdiInfo class="w-8 h-8" />
      </template>
    </AppButton>
    <!--Tooltip-->
    <div 
      ref="floatingRef" 
      :class="[
        'bg-white text-secondary border-2 border-white border-solid text-2xl py-2 ps-2 pe-6 duration-300 ease-in out rounded-[4rem]',
        isShowed ? 'opacity-100' : 'opacity-0',
      ]" 
      :style="floatingStyles">
      {{ props.text }}
      <!--Tooltip Arrow-->
      <div 
        ref="floatingArrowRef"
        class="absolute w-6 h-6 rotate-45 rounded-md inset-y-3 bg-inherit -right-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
//Imports
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue'
import { ref } from 'vue';

//Tooltip Props Interface
export interface AppToolTipProps {
  text: string;
}

//Props
const props = withDefaults(defineProps<AppToolTipProps>(), {
  text: 'This is a tooltip',
});

//Define Tooltip logic
//Data
const referenceRef = ref(null);
const floatingRef = ref(null);
const floatingArrowRef = ref(null);
const isShowed = ref(false);

//Methods
const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: 'left',
  transform: false,
  whileElementsMounted: autoUpdate,
  middleware: [offset(8), flip(), arrow({ element: floatingArrowRef }), shift()]
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