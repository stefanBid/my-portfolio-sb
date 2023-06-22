<template>
  <div class="w-full">
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

export interface AppParagraphProps {
  placement?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<AppParagraphProps>(), {
  placement: 'left',
  size: 'md',
});
</script>