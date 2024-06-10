<template>
    <div
        class="main-tile gap-6 overflow-hidden grid grid-cols-12 p-6 bg-gradient-to-b from-cyan-900 to-gray-900 text-white w-full h-[100svh]">
        <h1 class="fixed left-[40%] top-[50%] translate-y-[-50%] translate-x-[-40%] w-fit text-[10rem] transition-all duration-500 ease-in-out"
            :class="{ 'fade-enter-active': displayTransition }">
            {{ displayComputed }}
        </h1>
        <span class="col-span-4 overflow-hidden grid grid-rows-6 gap-6">
            <div class="overflow-hidden col-span-4 row-span-2"> <span @mouseover="changeDisplay('Portfolio')"
                    class="glass-tile  !bg-gray-400 !text-3xl !hover:cursor-default !hover:scale-0 font-mono">Portfolio
                    Website</span>
            </div>
            <div class="overflow-hidden  col-span-4 row-span-4"> <span @mouseover="changeDisplay('Resume')"
                    @click="router.push('/resume')" class="glass-tile">
                    <h2>Resume</h2>
                </span></div>
        </span>
        <div class="overflow-hidden col-span-8 flex flex-row justify-between"> <span
                @mouseover="changeDisplay('Akash Gehi')" href="/Profile" @click="router.push('/resume')"
                class="glass-tile title flex justify-between">
                <span class="flex flex-col">
                    <h2 class="text-3xl">Akash Gehi</h2>
                    <h3 class="text-4xl ">Frontend Developer</h3>
                </span>
                <div class="size-60 rounded-[50%] overflow-clip shadow-sm shadow-white">
                    <img src="../public/akash-gehi.png" class="size-full" alt="" />
                </div>
            </span></div>
        <div class="overflow-hidden col-span-4"> <span @mouseover="changeDisplay('About')"
                @click="router.push('/resume')" class="glass-tile ">
                <h2>About</h2>
            </span></div>
        <div class="overflow-hidden  col-span-4"> <span @mouseover="changeDisplay('Work')"
                @click="router.push('/resume')" class="glass-tile">
                <h2>Work</h2>
            </span>
            </div>
            <div class="col-span-4 overflow-hidden grid grid-rows-2 gap-6">
                <div class="overflow-hidden">
                    <span @mouseover="changeDisplay('Website')" @click="router.push('/resume')" class="glass-tile">
                        <h2>Website</h2>
                    </span>
                </div>
                <div class="overflow-hidden">
                    <span @mouseover="changeDisplay('Contact')" @click="router.push('/resume')" class="glass-tile">
                        <h2>Contact</h2>
                    </span>
                </div>
            </div>
            <transition name="overlay">
                <Overlay v-if="isOverlayVisible" :content="overlayContent" @close="closeOverlay" />
            </transition>
        </div>
    
</template>


<script setup>
import { reactive, computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
const router = useRouter()

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
    gsap.set(tiles, { display:'none' }) // Set initial visibility to hidden

    const tl = gsap.timeline()

    tiles.forEach((tile, index) => {
        // Generate random x and y values for entry direction
        const x = Math.random() > 0.5 ? 100 : -100
        const y = Math.random() > 0.5 ? 50 : -50

        tl.fromTo(tile,
            { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display:'flex' ,visibility: 'visible' },
            { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: index == 0 ? .3 : 0.1, delay: 0.01, ease: 'power1.out' })
    })
})
</script>


<style>
html,
body,
label {
    font-family: 'Roboto', sans-serif;
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

.fade-enter-active {
    opacity: 0;
    transition: opacity 0.5s;
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