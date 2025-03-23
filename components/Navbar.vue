<template>
  <nav class="navbar-container text-white text-xl flex items-center justify-center z-20" role="navigation" aria-label="Main Navigation">
    <button @click="toggleNavbar" class="navbar-toggle hidden" aria-label="Toggle Navigation">
      <img src="../public/icons8-home.svg" class="size-full" alt="Menu" />
    </button>
    
    <ul ref="navlist" v-if="true" class="navbar flex gap-1 lg:!flex-col ml-2 px-4 lg:ml-0 lg:justify-center">
      <li 
        v-for="link in filteredLinks" 
        :key="link.name" 
        @click="router.push(link.path)" 
        @keydown.enter="router.push(link.path)" 
        class="glass-3 cursor-pointer hover:scale-[1.18] hover:pb-3 transition-all p-6 group/nav-item flex flex-col items-center rounded-lg size-[60px] md:size-[84px]" 
        :aria-current="route.path === link.path ? 'page' : null"
        tabindex="0"
        role="menuitem"
      >
        <img :src="link.icon" class="size-[30px] m-auto" :alt="link.name" />
        <span class=" text-[12px] md:mt-2 font-light md:text-sm  text-gray-100">{{ link.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let isNavbarOpen = ref(false)
const route = useRoute()
const router = useRouter()
let isLargeScreen = ref(true)

const links = [
  { name: 'Home', path: '/', icon: '../icons8-home.svg' },
  { name: 'About', path: '/about', icon: '../about-icon.svg' },
  { name: 'Work', path: '/Work', icon: '../work-icon.svg' },
  { name: 'Resume', path: '/resume', icon: '../resume-icon.svg' },
  { name: 'Website', path: '/website', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9UlEQVR4nO1bS2gUWRRtE8EfuHChLkRRZiEiKIjCCLMSXWgcF8PMwjG6140xREEQauVkMRNxIYj4wTQOwgyzyFqYjQtX427AoESDsfqd87rTiIofYg3XVIU7z05XkW66qrvqwYWC973n3nPrvlevSiWn+L6/huQxAOdIXugFATBE8vuZmZnVpcVKEATLSI4AqJMMelEAzJIcFl1d5ftI/p72AjsIxL3/gUByJO1FpQDCuQXO97LbNwFg9ktMkOCQ9mJSBGFAABhu0mAOwDiA0VDkeS5p/RIX5Y7ZijRdD4QGJL0mDe66bwsZNGn9EgH4asxWSsx6vDgAxhsMWE5av0QAxtsMQLkVAObCAaKEotyAAovWt0CBcpsSoLj1eE0ByIF4BQAsPIC5p8BgBriYlpyINkIn2pR4dI2IzkEQ9LXzlVuUrizBPAUGs3By02EZ/EIBa+3JDASjtGSwyANY5AHMfSLkZYCLaYlXUIAFBZgJCoQHF7+FBxn1PFLgfpSckTyfOwCstQcjAABcyhUAAF4GQdCvAPg3bwBcjpS31u7r4NxeJgAguV1Z/1rXAwDgQaVS2eD7/lYAL2LaPoqUn5ycXAGgqupNtVr91hizm+Q/3QLAH6KIiui3Y9qfjtoaY35w6m4qaqwF8HemAQBwXQezSqWyjfNlsT7v6/X6OuX+E854L3zfXx/VT01NrQTwVyYBADCqD1qstTskusd5S9ReFAXwsUGbZ8aYb9QBTj/JG5kBAMBn+cKslSe5N8byUd8BZf2hJm19Y8wu5zqPlzoAmLfYccfyh0i+SdC/EgTBcgXa45i5asaY/Xou+bwdGiA1AH51FvQTgA8J+4+p4LcrYZ+3AA473nYjTQqMOQD8KIEtSV/t0jJOQsA/WWtPOXOOpk2Bnx2LHADwOqbvY8Xn5UKHBPO9k+s8zlzHFwmcHQ+CI87C9kgS06TPWdX2aII5ZgF858xxptW7CGxzHnBV370Lc4CnjdzYGLNRKfJnzLjyBtjtKH8hq5ngHR3ZrbWbSL5yAJiI6iUJiokZRoBUdOmXZCvTqTCACX0nl+QtXS/prqo7HTPeQios6bUkTt2yG3xYq9U2V6vVndoDZKOj9wmyEYoB83mtVtsiGyvZYHX9dhjANWX97Qn7fG5DsMsGACT3Kuv/0sF5MwHAExXM+gBM5woAAJfU2+FgBpTvOAAXFf/v5xGA1+Fx95UWd3DdCQCzKV4BAAsPYEEB5jwGDGdgIakIgKFEBxK9KgCOlGTrGv5RmTfla9PT06uizCx3NNDHciU5ypLfSXOkfLnR/8PLwg8Ns73s9mL5r5QvqSIxQQKjRMi07/S3UUSXgQXOq/If4aEYpYkGuXIAAAAASUVORK5CYII=' },
  { name: 'Contact', path: '/contact', icon: '../contact-icon.svg' },
]

const toggleNavbar = () => {
  isNavbarOpen = !isNavbarOpen
}

const filteredLinks = computed(() => {
  return links.filter(link => link.path !== route.path)
})

const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  isLargeScreen.value = window.innerWidth >= 1024
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.glass-3 {
  @apply bg-gray-500/20 backdrop-filter backdrop-blur-[7px] bg-opacity-[.2];
}

.navbar-toggle {
  cursor: pointer;
  padding: 1rem;
}

.navbar {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.nav-item {
  cursor: pointer;
  position: relative;
}

.nav-item:focus {
  outline: 2px solid white;
}
</style>
