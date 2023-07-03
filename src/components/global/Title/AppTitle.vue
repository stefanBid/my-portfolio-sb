<template>
  <!--Title Container-->
  <div 
    :class="[
      'w-full space-x-5 font-bold',
      {'text-center': props.placement === 'center'},
      {'text-right': props.placement === 'right'},
      {'text-left': props.placement === 'left'},
      {'text-[2.2rem]': props.size === 'sm'},
      {'text-[3.2rem]': props.size === 'md'},
      {'text-[4.2rem]': props.size === 'lg'},
    ]">
    <!--Classic title part-->
    <h1 class="inline-block">
      <slot />
    </h1>
    <!--Pretty title part-->
    <h1 class="inline-block text-primary">
      <slot name="pretty" />
    </h1>
  </div>
</template>

<script setup lang="ts">
//********************************************************************************************//
// - Component: APP-TITLE                                                                     //
// - Author: Stefano Biddau                                                                   //
// - Version: 1.0.0                                                                           //
// - Status: ✅                                                                               //
// - Description: This component is used to create a template for titles of pages             //
// - Implementation:                                                                          //   
//    - TODO:                                                                                 //
//    - FIXME:                                                                                //    
//********************************************************************************************//

//Title Props Interface
export interface AppTitleProps {
  placement?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

//Props
const props = withDefaults(defineProps<AppTitleProps>(), {
  placement: 'left',
  size: 'md',
});

</script>