<template>
  <!--Paragraph container-->
  <div class="w-full">
    <!--Paragraph-->
    <p 
    :class="[
      'text-justify',
      {'text-center': props.placement === 'center'},
      {'text-right': props.placement === 'right'},
      {'text-left': props.placement === 'left'},
      {'text-[1.6rem]': props.size === 'sm'},
      {'text-[1.8rem]': props.size === 'md'},
      {'text-[2.0rem]': props.size === 'lg'},
    ]">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
//********************************************************************************************//
// - Component: APP-PARAGRAPH                                                                 //
// - Author: Stefano Biddau                                                                   //
// - Version: 1.0.0                                                                           //
// - Status: ✅                                                                               //
// - Description: This component is used to create a paragraph for text input                 //
// - Implementation:                                                                          //   
//    - TODO:                                                                                 //
//    - FIXME:                                                                                //    
//********************************************************************************************//


//Paragraph Props Interface
export interface AppParagraphProps {
  placement?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

//Props
const props = withDefaults(defineProps<AppParagraphProps>(), {
  placement: 'left',
  size: 'md',
});
</script>