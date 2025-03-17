<template>
    <div class="main-tile h-full grid lg:grid-cols-12 lg:gap-1 text-white">
        <span class="tiles-div col-span-12  gap-1 lg:gap-2
        grid grid-cols-12  p-2 lg:p-6">
            <HomepageTile class="HomepageTile col-span-12 lg:col-span-8 lg:row-span-4">
                <div @click="router.push('/about')" class="grid gap-2 items-center grid-cols-12">
                    <span class=" col-span-7 lg:col-span-8">
                        <h2 class="  text-2xl lg:text-4xl drop-shadow-font">Hello! <br> I'm<strong> Akash Gehi</strong>
                        </h2>
                        <!-- </span> -->
                        <h3 class=" text-3xl lg:text-5xl font-medium">Frontend Developer</h3>
                        <p class="mt-3 text-base md:text-lg xl:text-2xl">I build things for the Web</p>
                    </span>
                    <div
                        class="col-span-5 rounded-full bg-gradient-to-t from- lg:col-span-4 overflow-clip   shadow-sm ">
                        <img src="../public/file-1.png" class="shadow-md my-auto aspect-auto " alt="Akash Gehi" />
                    </div>
                </div>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-7 lg:col-span-4 lg:row-span-1 ">
                <div class="secondary-tile">

                    <h2>Socials</h2>
                    <p class="social-icons text-white grid grid-cols-4 gap-1 items-end justify-end ml-auto ">
                        <img src="../public/icons8-github.svg" class="size-full" alt="" /><img
                            src="../public/icons8-linkedin.svg" alt=""><img src="../public/icons8-instagram.svg"
                            alt=""><img src="../public/icons8-gmail.svg" alt="">
                    </p>
                </div>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-5 lg:col-span-4 lg:row-span-3 secondary-tile">
                <h2>Resume</h2>
                <p>Professional Experience and Skills</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-12 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>About</h2>
                <p>My Story and Passions</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-12 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>Work</h2>
                <p>Professional Milestones</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-6 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>Website</h2>
                <p>About this Website</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-6 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>Contact</h2>
                <p>Let's connect and collaborate</p>
            </HomepageTile>
        </span>
    </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TransitionWrapper from '~/components/TransitionWrapper.vue';
import { useEnterAnimation } from '@/composables/animations.js'
const { enterAnimation, exitAnimation } = useEnterAnimation()
const { $gsap: gsap, $Draggable: Draggable, $enterAnimation } = useNuxtApp();
const router = useRouter()
const isOverlayVisible = ref(false)
const overlayContent = ref('')

// definePageMeta({
//     layout: 'home'
// })

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

let tl = ref(null)
// const transitionWrapper = ref(null);

onBeforeRouteLeave((to, from, next) => {
    tl = gsap.timeline(); //create the timeline
console.log('leave')

    const tiles = document.querySelectorAll('.HomepageTile')

    exitAnimation(tiles,next)
    // // const tl = gsap.timeline()

    // tiles.forEach((tile, index) => {
    //     // Generate random x and y values for entry direction
    //     const x = Math.random() > 0.5 ? 100 : -100
    //     const y = Math.random() > 0.5 ? 50 : -50

    //     tl.fromTo(tile,
    //         { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
    //         { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible', delay: 1, duration: index == 0 ? .5 : 0.3, delay: -.0005, ease: 'power3.in', }).then(() => {
    //             next()
    //         })
    // })
    // gsap.set(tiles, { display: 'none' }) // Set initial visibility to hidden
})

onMounted(() => {

    // tl = gsap.timeline(); //create the timeline


    const tiles = document.querySelectorAll('.HomepageTile')
    enterAnimation(tiles,function(index){return index == 1 ? 1 : 0.1},'power3.in', false)

    // gsap.set(tiles, { display: 'none' }) // Set initial visibility to hidden

    // const tl = gsap.timeline()

    // tiles.forEach((tile, index) => {
    //     // Generate random x and y values for entry direction
    //     const x = Math.random() > 0.5 ? 100 : -100
    //     const y = Math.random() > 0.5 ? 50 : -50

    //     tl.fromTo(tile,
    //         { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible', delay: 1 },
    //         { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: index == 0 ? .5 : 0.3, delay: -.0005, ease: 'power3.in' })
    // })
})
</script>

<style>
html,
body,
label {
    font-family: 'Roboto', sans-serif;
}

/* 
.glass-tile {
    @apply h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-[.2] p-5 flex items-center text-xl box-border font-light hover:bg-opacity-5 outline-gray-100/50 hover:cursor-pointer 
    hover:shadow hover:shadow-gray-50/20 transition-all
    max-md:mt-2;
    transition-duration: .3s;
} */
.HomepageTile {
    @apply hover:scale-[1.5]
}

.secondary-tile {
    @apply flex flex-col justify-between items-start gap-2 h-full
}

.secondary-tile h2 {
    @apply text-base md:text-xl xl:text-2xl tracking-tighter font-normal
}

.secondary-tile p {
    @apply text-base md:text-2xl xl:text-2xl ml-auto flex-wrap text-right
}

.glass-tile h1,
.glass-tile h2,
.glass-tile p {
    @apply drop-shadow-font;
}

.social-icons img {
    @apply max-h-[70%] hover:scale-[1.1] transition-all
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

/* Mobile Styles */
@media (max-width: 768px) {
    .main-tile {
        grid-template-columns: 1fr;
        /* gap: 1.5rem; */
    }
}

</style>
