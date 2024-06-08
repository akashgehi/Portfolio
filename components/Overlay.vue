<template>
    <div class="glass-tile-overlay text-white overlay fixed inset-0 m-8  flex items-center justify-center" @click.self="close">
        <button class="close-button absolute top-2 text-3xl right-4 hover:text-4xl transition-all text-white p-2 rounded" @click="close">x</button>
        <div class="overlay-content p-8 rounded-lg relative w-[80%] h-[80%] overflow-auto">
        <p>{{ content }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    content: String
  })
  
  const emit = defineEmits(['close'])
  
  function close() {
    emit('close')
  }
  </script>
  
  <style scoped>
  .overlay-enter-active, .overlay-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .overlay-enter-from, .overlay-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
  </style>

  <style>
.glass-tile-overlay{
   @apply rounded-md bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-50/40 bg-opacity-10 p-5
}
</style>