<template>
  <div 
    :class="[
     'min-h-screen border-2 border-red-500 border-solid flex justify-center items-center pt-40 pb-8 duration-300 ease-in-out',
     {'px-[9%]': !lgBreakPoint},
     {'px-[3%]': lgBreakPoint},
     {'flex-row-reverse': props.inverted && !smBreakPoint},
     {'flex-row': !props.inverted && !smBreakPoint},
     {'flex-col-reverse': props.inverted && smBreakPoint},
     {'flex-col': !props.inverted && smBreakPoint},
     {'gap-[5rem]': props.subsectionDistance === 5 || smBreakPoint},
     {'gap-[10rem]': props.subsectionDistance === 10 && !smBreakPoint},
    ]">
    <div>
      <slot name="default" />
    </div>
    <div>
      <slot name="next" />
    </div>
  </div>
</template>

<script setup lang="ts">
//Import
import { useBreakpoints } from '@vueuse/core';

// Interface of Section props
export interface SectionProps{
  inverted?: boolean;
  subsectionDistance?: 5 | 10;
}

// 1) Configure the props
const props = withDefaults(defineProps<SectionProps>(), {
  inverted: false,
  subsectionDistance: 5,
});

//Data
const breakpoints = useBreakpoints({
  sm: 768,
  lg: 1200
});

const smBreakPoint = breakpoints.smallerOrEqual('sm');
const lgBreakPoint = breakpoints.smallerOrEqual('lg');


</script>