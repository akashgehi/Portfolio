<template>Profile</template>

template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'

const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
const router = useRouter()

const state = reactive({
    display: 'Akash Gehi'
})

const displayTransition = ref(false)
const isOverlayVisible = ref(false)
const overlayContent = ref('')
const mainHeading = ref(null)

function changeDisplay(newDisplay) {
    gsap.fromTo(mainHeading.value, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    state.display = newDisplay
}

function openOverlay(content) {
    router.push({ name: '/' + content })

    overlayContent.value = content
    isOverlayVisible.value = true
}

function closeOverlay() {
    isOverlayVisible.value = false
}

const displayComputed = computed(() => {
    return state.display
})

onMounted(() => {
    const tiles = document.querySelectorAll('.glass-tile')
    mainHeading.value = document.querySelector('h1')
    const mainbg = document.querySelector('.main-tile')

    // Set initial visibility to hidden
    gsap.set(tiles, { opacity: 0, scale: 0.9, display: 'none' })
    gsap.set(mainHeading.value, { opacity: 0, scale: 0.5, visibility: 'hidden' })
    gsap.set(mainbg, { opacity: 0, scale: 1, display: 'none', backgroundColor: 'white' })

    // Create a timeline
    const tl = gsap.timeline()

    // Animate the background and main heading first
    tl.fromTo(mainbg, 
        { display: 'grid', backgroundColor: 'white', opacity: 0 }, 
        { opacity: 1, backgroundColor: 'blue', duration: 0.5, ease: 'power1.out' })
      .fromTo(mainHeading.value, 
        { visibility: 'visible', opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power1.out' }) // overlap with background animation

    // Animate the tiles after the background and heading
    tiles.forEach((tile, index) => {
        // Generate random x and y values for entry direction
        const x = Math.random() > 0.5 ? 100 : -100
        const y = Math.random() > 0.5 ? 50 : -50

        tl.fromTo(tile,
            { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible' },
            { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: 0.1, delay: .01 * index, ease: 'power1.out' })
    })
})
</script>

<style>
html,
body,
label {
    font-family: 'Roboto', sans-serif;
}

.main-tile {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.glass-tile {
    @apply h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-[.2] p-5 flex items-center text-xl box-border font-light hover:bg-opacity-5 outline-gray-100/50 hover:cursor-pointer hover:scale-[1.02] hover:shadow hover:shadow-gray-50/20 transition-all;
    transition-duration: .3s;
}

.glass-tile h1,
.glass-tile h2,
.glass-tile p {
    @apply drop-shadow-font
}

h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-align: center;
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
</style>