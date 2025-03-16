<!-- layouts/default.vue -->
<template>
    <div class="layout md:flex md:items-center md:justify-center h-screen ">
        <video autoplay muted loop  id="myVideo" class="fixed object-cover h-screen w-screen">
  <source src="../public/video-bg-4.mp4" type="video/mp4">
</video>

        <div class="md:size-[80%] vr-frame  text-white">
            
          <NuxtPage class="vr-content-1" />
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
  
  <style >
  
  .glass-1{
        @apply bg-gray-400 backdrop-filter backdrop-blur-[6px] bg-opacity-[.2]
        outline-gray-100/50
    }
  
    .vr-frame {
  perspective: 1000px;
}

.vr-content-1 {
  transform-style: flat;
  transform: rotateX(5deg);
}
  </style>
  