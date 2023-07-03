<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full py-[2rem] bg-tertiary flex justify-between items-center z-50 duration-300 ease-in-out',
      mdBreakPoint ? 'px-[3%]' : 'px-[9%]'
    ]">
    <!--Wbsite Logo-->
    <RouterLink
      class="flex items-center gap-3 group " 
      :to="{ name: navLogo.routerName }"
    >
      <IconMdiConsole class="w-20 h-20 duration-300 ease-in-out group-hover:text-primary"/> 
      <p class="group-hover:text-primary text-[2.5rem] font-semibold duration-300 ease-in-out leading-[1.1rem]">{{ navLogo.displayName }}</p>
    </RouterLink>

    <!--Hamburger menu icon-->
    <div v-show="smBreakPoint">
      <IconMdiMenu
        v-show="!isOpenMenu"
        class="w-16 h-16 duration-300 ease-in-out cursor-pointer hover:text-primary active:rotate-90" 
        @click="toggleMenu()"/>
      <IconMdiClose
        v-show="isOpenMenu"
        class="w-16 h-16 duration-300 ease-in-out cursor-pointer hover:text-primary active:-rotate-90" 
        @click="toggleMenu()"/>
    </div>

    <!--Menu NavBar-->
    <nav 
      :class="[
        'duration-300 ease-in-out bg-inherit ',
        {'space-x-[4rem]': !smBreakPoint},
        {'absolute top-full w-full py-[1rem] px-[3%] border-t-2 border-solid border-secondary': smBreakPoint},
        {'left-0 shadow-xl shadow-secondary': isOpenMenu && smBreakPoint },
        {'-left-full shadow-none': !isOpenMenu && smBreakPoint}
        
      ]"
    >

      <RouterLink
        v-for="item in navItems" :key="item.routerName"
        :to="{ name: item.routerName }"
        :class="[
          'text-[1.7rem] duration-300 ease-in-out hover:text-primary  hover:animate-pulse',
          {'block text-[2rem] my-[3rem] mx-0 w-fit': smBreakPoint}
        ]"
        @click="togglePage()">
        {{ item.displayName }}
      </RouterLink>
    </nav>

  </header>
</template>

<script setup lang="ts">
//Import
import { ref, computed } from 'vue';
import type { NavItem} from '../../types'
import { useBreakpoints } from '@vueuse/core'
import { RouterLink } from 'vue-router';

//1) Configure the nav items
const navLogo = ref<NavItem>({
  displayName: 'Stefano Biddau',
  routerName: 'home',
});

const navItems = ref<NavItem[]>([
  {
    displayName: 'Home',
    routerName: 'home',
  },
  {
    displayName: 'About',
    routerName: 'about',
  },
  {
    displayName: 'Skills',
    routerName: 'skills',
  },
  {
    displayName: 'Works',
    routerName: 'works',
  },
]);

// 2) Define open-close menu
//Data
const isOpen = ref(false); //false = hamburger-icon, true = close-icon

//This value is used in accordance with the breakpoint specified in tailwind.config.js
const breakpoints = useBreakpoints({
  sm: 768,
  md: 991
});

const smBreakPoint = breakpoints.smallerOrEqual('sm');
const mdBreakPoint = breakpoints.smallerOrEqual('md');

//Methods

//This method is used to change the value of isOpen for oper or close the menu item in mobile view
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

//This method is used to close the menu item when a link is clicked in mobile view (only) fon dont trigger the value of is open later
const togglePage = () => {
  if (smBreakPoint.value) {
    isOpen.value = false;
  }
};

//Computed
//This computed is use to show reactivity value of isOpen
const isOpenMenu = computed(() => {
  if (smBreakPoint.value) {
    return isOpen.value;
  } else {
    isOpen.value = false;
    return isOpen.value;
  }
});
</script>

<style scoped>
nav a:hover{
  text-shadow: 0 0 1rem #f72585;
}

nav a.router-link-exact-active{
    color:#f72585;
    text-shadow: 0 0 1rem #f72585;
}

</style>