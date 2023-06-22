<template>
  <div class="inline-block">
    <AppButton
      ref="referenceRef" 
      custom="minimal"
      class="p-[0px]"
      rounded
      outline 
      @mouseenter="showFloating" 
      @mouseleave="hideFloating"
    >
      <template #icon>
        <IconMdiInfo class="w-8 h-8" />
      </template>
    </AppButton>
    <div
      ref="floatingRef"
      :class="[
        'bg-white text-secondary border-2 border-white border-solid text-2xl ps-2 pe-6  py-2 transition-all rounded-[4rem]',
        isShowed ? 'opacity-100' : 'opacity-0',
      ]"
      :style="floatingStyles"
    > 
      {{ props.text }}
      <div ref="floatingArrowRef" class="absolute w-6 h-6 rotate-45 rounded-md inset-y-3 bg-inherit -right-2" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue'
import { ref } from 'vue';
export interface AppToolTipProps {
  text: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const props = withDefaults(defineProps<AppToolTipProps>(), {
  text: 'This is a tooltip',
  placement: 'top',
});

const referenceRef = ref(null);
const floatingRef = ref(null);
const floatingArrowRef = ref(null);

const isShowed = ref(false);

const { floatingStyles } = useFloating(referenceRef, floatingRef, {
  placement: props.placement,
  transform: false,
  whileElementsMounted: autoUpdate,
  middleware: [offset(8), flip(), arrow({ element: floatingArrowRef}), shift()]
});

const showFloating = () => {
  setTimeout(() => {
    isShowed.value = true;
  }, 200);
};

const hideFloating = () => {
  setTimeout(() => {
    isShowed.value = false;
  }, 200);
};

</script>