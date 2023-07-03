<template>
  <button
    :disabled="props.disabled"
    :class="[
      'font-semibold tracking-widest duration-300 ease-in-out text-[1.6rem] cursor-pointer group disabled:cursor-no-drop disabled:opacity-50 disabled:bg-white disabled:text-secondary',
      {
        'bg-primary text-secondary hover:bg-transparent hover:text-primary shadow-button shadow-primary hover:shadow-none': classic,
        'bg-transparent text-primary hover:bg-primary hover:text-secondary shadow-none hover:shadow-button hover:shadow-primary': classicOutline,
        'border-solid border-2 border-primary': classic || classicOutline,

        'bg-white text-secondary hover:text-white hover:bg-transparent': minimal,
        'bg-transparent text-white hover:text-secondary hover:bg-white': minimalOutline,
        'border-solid border-2 border-white': minimal || minimalOutline,

        'rounded-full p-3': props.rounded,
        'px-11 py-4 rounded-[4rem]': !props.rounded,
      },
    ]">
      <!--Button Content organization-->
      <!--Case 1 Tex-Button-->
      <span v-if="!props.rounded" class="flex items-center justify-center gap-x-3">
        <slot />
        <slot name="icon" />
      </span>
      <!--Case 2 Icon-Button-->
      <span v-else >
        <slot name="icon" />
      </span>

  </button>
</template>

<script setup lang="ts">
//********************************************************************************************//
// - Component: APP-BUTTON                                                                    //
// - Author: Stefano Biddau                                                                   //
// - Version: 1.0.0                                                                           //
// - Status: ✅                                                                               //
// - Description: This component is used to create a button with different styles and shapes. //
// - Implementation:                                                                          //   
//    - TODO:                                                                                 //
//    - FIXME:                                                                                //    
//********************************************************************************************//

//Imports
import { computed } from 'vue';

//Button Props Interface
export interface AppButtonProps {
  custom: 'classic' | 'minimal';
  disabled?: boolean;
  rounded?: boolean;
  outline?: boolean;
}

//Props
const props = withDefaults(defineProps<AppButtonProps>(), {
  custom: 'classic',
  disabled: false,
  rounded: false,
  outline: false,
});

//Define coputed for each button type
const classic = computed(() => {
  return props.custom === 'classic' && !props.disabled && !props.outline;
});

const minimal = computed(() => {
  return props.custom === 'minimal' && !props.disabled && !props.outline;
});

const classicOutline = computed(() => {
  return props.custom === 'classic' && !props.disabled && props.outline;
});

const minimalOutline = computed(() => {
  return props.custom === 'minimal' && !props.disabled && props.outline;
});

</script>