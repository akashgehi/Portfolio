<template>
  <div class="main-tile gap-6 grid grid-cols-12 p-6 bg-gradient-to-b from-cyan-900 to-gray-900 text-white w-full h-[100svh]">
    <h1
      class="fixed left-[40%] top-[50%] translate-y-[-50%] translate-x-[-40%] w-fit text-[10rem] transition-all duration-500 ease-in-out"
      :class="{ 'fade-enter-active': displayTransition }"
    >
      {{ displayComputed }}
    </h1>
    <span class="col-span-4 grid grid-rows-6 gap-6">

      <span @mouseover="changeDisplay('Portfolio')"  class="glass-tile col-span-4 row-span-2 !bg-gray-400 !text-3xl !hover:cursor-default !hover:scale-0 font-mono">Portfolio Website</span>
      <span @mouseover="changeDisplay('Resume')" @click="openOverlay('photo content')" class="glass-tile col-span-4 row-span-4"><h2>Resume</h2></span>
    </span>
    <span @mouseover="changeDisplay('Akash Gehi')" @click="openOverlay('Akash Gehi content')" class="glass-tile title col-span-8 flex flex-row  justify-between">
      <span class="flex flex-col">
        <h2 class="text-3xl">
          Akash Gehi
        </h2>
        <h3 class="text-4xl ">Frontend Developer</h3>
      </span>
        <div class="size-60 rounded-[50%] overflow-clip shadow-sm shadow-white">

          <img src="../akash-gehi.png" class="size-full" alt="">
        </div>
    </span>
    <span @mouseover="changeDisplay('About')" @click="openOverlay('about content')" class="glass-tile col-span-4"><h2>About</h2></span>
    <span @mouseover="changeDisplay('Work')" @click="openOverlay('work content')" class="glass-tile col-span-4"><h2>Work</h2></span>
    <div class="col-span-4 grid grid-rows-2 gap-6">
      <span @mouseover="changeDisplay('Website')" @click="openOverlay('contact content')" class="glass-tile"><h2>Website</h2></span>
      <span @mouseover="changeDisplay('Contact')" @click="openOverlay('contact content')" class="glass-tile"><h2>Contact</h2></span>
    </div>
    <transition name="overlay">
      <Overlay v-if="isOverlayVisible" :content="overlayContent" @close="closeOverlay" />
    </transition>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
// import Overlay from './Overlay.vue'  // Ensure this component exists

const state = reactive({
  display: 'Akash Gehi'
})

const displayTransition = ref(false)
const isOverlayVisible = ref(false)
const overlayContent = ref('')

function changeDisplay(newDisplay) {
  displayTransition.value = true
  setTimeout(() => {
    state.display = newDisplay
    displayTransition.value = false
  }, 250) // Half of the duration to ensure smooth transition
}

function openOverlay(content) {
  overlayContent.value = content
  isOverlayVisible.value = true
}

function closeOverlay() {
  isOverlayVisible.value = false
}

const displayComputed = computed(() => {
  return state.display
})
</script>


<style>

html, body, label {
  font-family: 'Roboto', sans-serif;
}
.glass-tile {
  @apply h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-[.2] p-5 flex items-center
  text-xl box-border font-light  
  hover:bg-opacity-5 outline-gray-100/50 hover:cursor-pointer
  hover:scale-[1.02]
  hover:shadow
  hover:shadow-gray-50/20
  transition-all 
  ;
  transition-duration: .3s;
  }
  .glass-tile h1,.glass-tile h2,.glass-tile p{
  @apply drop-shadow-font

}

.fade-enter-active {
  opacity: 0;
  transition: opacity 0.5s;
}

/* Overlay transition */
.overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
