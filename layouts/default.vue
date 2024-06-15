<!-- layouts/default.vue -->
<template>
    <div class="layout">
        <div class="bg-gradient-to-bl from-gray-950  to-gray-700 h-screen text-white">
          <NuxtPage />
        <!-- </div> -->
    </div>
</div>
  </template>
  
  <script setup>
 
 const displayTransition = ref(false)
const state = reactive({
    display: 'Akash Gehi'
})

function changeDisplay(newDisplay) {
    displayTransition.value = true
    setTimeout(() => {
        state.display = newDisplay
        displayTransition.value = false
    }, 250) // Half of the duration to ensure smooth transition
}
const displayComputed = computed(() => {
    return state.display
})

  </script>
  
  <style scoped>
  .layout {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('~/assets/background.jpg'); /* Replace with your background image */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1; /* Ensure the background is behind the content */
  }
  .content {
    position: relative;
    z-index: 1;
    width: 100%;
  }
  </style>
  