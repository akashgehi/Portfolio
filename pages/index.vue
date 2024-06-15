<template>
    <div class="main-tile bg-black grid md:grid-cols-12 md:gap-1 text-white">
        <h1 class="fixed text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[5rem]">
            <svg class="size-[200%]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                    <stop offset="0%" stop-color="rgb(95,54,152)" stop-opacity="1" />
                    <stop offset="100%" stop-color="rgb(247,109,138)" stop-opacity="1" />
                </linearGradient>
                <path fill="url(#PSgrad_0)">
                    <animate repeatCount="indefinite" attributeName="d" dur="10s"
                        values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	" />
                </path>
            </svg>
        </h1>

        <span class="tiles-div col-span-12 border border-black gap-1 md:gap-2
        grid grid-cols-12  h-screen p-2 md:p-6">
            <HomepageTile class="HomepageTile col-span-12 md:col-span-8 md:row-span-4">
                <div @click="router.push('/resume')" class="grid gap-2 items-center grid-cols-12">
                    <span class=" col-span-7 md:col-span-8">
                        <h2 class="  text-2xl md:text-4xl drop-shadow-font">Hello! <br> I'm<strong> Akash Gehi</strong>
                        </h2>
                        <!-- </span> -->
                        <h3 class=" text-3xl md:text-5xl font-medium">Frontend Developer</h3>
                        <p class="mt-3">I build things for the Web</p>
                    </span>
                    <div
                        class="col-span-5 rounded-full bg-gradient-to-t from- md:col-span-4 overflow-clip   shadow-sm ">
                        <img src="../public/file-1.png" class="shadow-md my-auto aspect-auto " alt="Akash Gehi" />
                    </div>
                </div>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-7 md:col-span-4 md:row-span-1 ">
                <div class="secondary-tile">

                    <h2>Socials</h2>
                    <p class="social-icons text-white grid grid-cols-4 gap-1 items-end justify-end ml-auto ">
                        <img src="../public/icons8-github.svg" class="size-full" alt="" /><img
                            src="../public/icons8-linkedin.svg" alt=""><img src="../public/icons8-instagram.svg"
                            alt=""><img src="../public/icons8-gmail.svg" alt="">
                    </p>
                </div>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-5 md:col-span-4 md:row-span-3 secondary-tile">
                <h2>Resume</h2>
                <p>Professional Experience and Skills</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-12 md:col-span-3 md:row-span-3 secondary-tile">
                <h2>About</h2>
                <p>My Story and Passions</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-12 md:col-span-3 md:row-span-3 secondary-tile">
                <h2>Work</h2>
                <p>Professional Milestones</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-6 md:col-span-3 md:row-span-3 secondary-tile">
                <h2>Website</h2>
                <p>About this Website</p>
            </HomepageTile>
            <HomepageTile class="HomepageTile col-span-6 md:col-span-3 md:row-span-3 secondary-tile">
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
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
const router = useRouter()

const isOverlayVisible = ref(false)
const overlayContent = ref('')

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
    tl.to('.tiles-div', { autoAlpha: 0, duration: .75 })

    gsap.set('svg', { visibility: 'hidden' })
    tl.to('svg', { visibility: 'visible', scaleY: 7, scaleX: 7, duration:1, ease: 'ease-in' }).then(() => {next();})
})

onMounted(() => {
    tl = gsap.timeline(); //create the timeline

    // gsap.set('svg', {visibility:'hidden'})
    tl.from('svg', { visibility: 'visible', width: 0, height: 0, duration: 1 })


    const tiles = document.querySelectorAll('.HomepageTile')
    gsap.set(tiles, { display: 'none' }) // Set initial visibility to hidden

    // const tl = gsap.timeline()

    tiles.forEach((tile, index) => {
        // Generate random x and y values for entry direction
        const x = Math.random() > 0.5 ? 100 : -100
        const y = Math.random() > 0.5 ? 50 : -50

        tl.fromTo(tile,
            { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible', delay: 1 },
            { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", duration: index == 0 ? .5 : 0.3, delay: -.0005, ease: 'power3.in' })
    })
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
    @apply text-lg md:text-xl xl:text-2xl tracking-tighter font-extralight shadow-white drop-shadow-font font-mono
}

.secondary-tile p {
    @apply text-lg md:text-2xl xl:text-2xl ml-auto flex-wrap text-right
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

    .bg-title {
        font-size: 3rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .glass-tile h2,
    .glass-tile h3 {
        font-size: 1.5rem;
    }

}
</style>
