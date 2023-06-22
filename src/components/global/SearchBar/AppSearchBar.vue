<template>
  <div 
    :class="[
      'flex flex-col w-full gap-y-5',
      { 'items-start': props.placement === 'left' },
      { 'items-end': props.placement === 'right' },
      { 'items-center': props.placement === 'center' },
    ]">
    <div 
    :class="[
      'w-[55%] flex items-center justify-end gap-x-3 duration-300 ease-in-out px-7',
      { 'w-[50%]': !isFocused },
      { 'w-[60%]': isFocused }
    ]">
      <AppToolTip text="Cerca competenze come JavaScrip o Java ..." placement="left" />
    </div>
    <div 
      :class="[
        'flex text-center rounded-[4rem] justify-center items-center ps-11 gap-x-3 duration-300 ease-in-out ring-primary',
        { 'w-[50%] ring-2 bg-transapert': !isFocused },
        { 'w-[60%] shadow-primary shadow-search ring-4 outline-primary bg-secondary': isFocused },
        { 'pe-6': modelInputValue !== '' },
      ]"
    >
      <IconMdiSearch class="w-12 h-12"/>
      <input
        id="search-bar"
        @focus="onFocused"
        @focusout="onBlured"
        v-model="modelInputValue"
        type="text"
        :placeholder="props.placeholder"
        :class="[
          'text-3xl w-[calc(100%-3rem)] h-full py-4 rounded-[4rem] bg-transparent px-2 placeholder:italic placeholder:text-primary',
          {'w-[calc(100%-3rem)]': modelInputValue === ''},
          {'w-[calc(100%-6rem)]': modelInputValue !== ''},
        ]">
      <IconMdiCloseCircle
        v-if="modelInputValue !== '' "
        @click="modelInputValue = ''"
        class="z-10 w-12 h-12 duration-300 ease-in-out hover:text-primary hover:cursor-pointer"
      />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';


export interface AppSearchBarProps {
  placement?: 'left' | 'right' | 'center';
  placeholder?: string;
}

const props = withDefaults(defineProps<AppSearchBarProps>(), {
  position: 'center',
  placeholder: 'Search ...',
});

const modelInputValue = defineModel<string>()



const isFocused = ref(false);

const onFocused = () => {
  isFocused.value = true;
}

const onBlured = () => {
  isFocused.value = false;
}
</script>