<!-- layouts/default.vue -->
<template>
    <div class="layout">
        <video autoplay muted loop  id="myVideo" class="fixed object-cover h-screen w-screen">
  <source src="/public/bg-video-7.mp4" type="video/mp4">
</video>
        <div class="h-screen text-white">
            
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
    /* position: relative; */
    min-height: 100vh;
    overflow: hidden;
  }
  
  </style>
  