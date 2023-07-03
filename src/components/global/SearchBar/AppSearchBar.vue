<template>
  <!--Search Bar Container-->
  <div 
    :class="[
      'flex flex-col w-full gap-y-5',
      { 'items-start': props.placement === 'left' },
      { 'items-end': props.placement === 'right' },
      { 'items-center': props.placement === 'center' },
    ]">
    <!--Info ToolTip-->
    <div 
    :class="[
      'flex items-center justify-end gap-x-3 duration-300 ease-in-out px-7',
      { 'w-[50%]': !isFocused },
      { 'w-[60%]': isFocused }
    ]">
      <InfoToolTip :text="props.infoText"  />
    </div>
    <!--Search Bar Input-->
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
//********************************************************************************************//
// - Component: APP-SEARCH-BAR                                                                //
// - Author: Stefano Biddau                                                                   //
// - Version: 1.0.0                                                                           //
// - Status: ✅                                                                               //
// - Description: This component is used to create an input for search an item                //
// - Implementation:                                                                          //   
//    - TODO:                                                                                 //
//    - FIXME:                                                                                //    
//********************************************************************************************//

//Imports
import { ref } from 'vue';
import InfoToolTip from './InfoToolTip.vue';

//Search Bar Props Interface
export interface AppSearchBarProps {
  placement?: 'left' | 'right' | 'center';
  placeholder?: string;
  infoText?: string;
}

//Props
const props = withDefaults(defineProps<AppSearchBarProps>(), {
  position: 'center',
  placeholder: 'Search ...',
  infoText: 'Info to help the user with research',
});

//two-way binding for input keyword
const modelInputValue = defineModel<string>()

//Defining the behavior of the search bar with user interaction
const isFocused = ref(false);

const onFocused = () => {
  isFocused.value = true;
}

const onBlured = () => {
  isFocused.value = false;
}
</script>