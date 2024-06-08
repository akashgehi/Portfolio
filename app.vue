<template>
  <div class="main-tile gap-6 grid grid-cols-12 p-6 bg-gray-900 text-white w-full h-[100svh]">
    <h1
      class="fixed left-[40%] top-[40%] translate-y-[-50%] translate-x-[-40%] w-fit text-[10rem] transition-all duration-500 ease-in-out"
      :class="{ 'fade-enter-active': displayTransition }"
    >
      {{ displayComputed }}
    </h1>
    <span @mouseover="changeDisplay('photo')" @click="openOverlay('photo content')" class="glass-tile col-span-4">photo</span>
    <span @mouseover="changeDisplay('Akash Gehi')" @click="openOverlay('Akash Gehi content')" class="glass-tile title col-span-8">Akash Gehi</span>
    <span @mouseover="changeDisplay('About')" @click="openOverlay('about content')" class="glass-tile col-span-4">about</span>
    <span @mouseover="changeDisplay('Work')" @click="openOverlay('work content')" class="glass-tile col-span-4">work</span>
    <div class="col-span-4 grid grid-rows-2 gap-6">
      <span @mouseover="changeDisplay('Contact')" @click="openOverlay('contact content')" class="glass-tile">contact</span>
      <span @mouseover="changeDisplay('Website')" @click="openOverlay('contact content')" class="glass-tile">contact</span>
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
.glass-tile {
  @apply h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-10 p-5 flex flex-col-reverse
  text-xl hover:text-2xl
  hover:bg-gray-500 outline-gray-100/50 hover:cursor-pointer
  transition-all 
  ;
  transition-duration: .2s;
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
