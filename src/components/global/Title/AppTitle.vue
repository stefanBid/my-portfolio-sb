<template>
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
    <h1 class="inline-block">
      <slot />
    </h1>
    <h1 class="inline-block text-primary">
      <slot name="pretty" />
    </h1>
  </div>
</template>

<script setup lang="ts">

export interface AppTitleProps {
  placement?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<AppTitleProps>(), {
  placement: 'left',
  size: 'md',
});

</script>