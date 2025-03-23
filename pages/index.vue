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
            <HomepageTile class="HomepageTile col-span-7 lg:col-span-4 lg:row-span-1 pointer-events-auto">
                <div class="secondary-tile">

                    <h2>Socials</h2>
                    <p class="social-icons text-white grid grid-cols-4 gap-1 items-end justify-end ml-auto ">
                        <img src="../public/icons8-github.svg" class="size-full" alt="" /><img
                            src="../public/icons8-linkedin.svg" alt=""><img src="../public/icons8-instagram.svg"
                            alt=""><img src="../public/icons8-gmail.svg" alt="">
                    </p>
                </div>
            </HomepageTile>
            <HomepageTile @click="router.push('/resume')" class="HomepageTile col-span-5 lg:col-span-4 lg:row-span-3 secondary-tile">
                <h2>Resume</h2>
                <p>Professional Experience and Skills</p>
            </HomepageTile>
            <HomepageTile @click="router.push('/about')" class="HomepageTile col-span-12 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>About</h2>
                <p>My Story and Passions</p>
            </HomepageTile>
            <HomepageTile @click="router.push('/work')" class="HomepageTile col-span-12 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>Projects</h2>
                <p>Work Showcase</p>
            </HomepageTile>
            <HomepageTile @click="router.push('/website')" class="HomepageTile col-span-6 lg:col-span-3 lg:row-span-3 secondary-tile">
                <h2>Website</h2>
                <p>About this Website</p>
            </HomepageTile>
            <HomepageTile @click="router.push('/contact')" class="HomepageTile col-span-6 lg:col-span-3 lg:row-span-3 secondary-tile">
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
    const tiles = document.querySelectorAll('.HomepageTile');

    // Reset tiles' opacity so they animate properly when coming back
    gsap.set(tiles, { opacity: 1, visibility: 'visible' });

    exitAnimation(tiles, next);
});

onMounted(() => {
    const tiles = document.querySelectorAll('.HomepageTile');
    
    // Set tiles to invisible before animation starts
    gsap.set(tiles, { opacity: 0 });

    enterAnimation(
        tiles, 
        function(index) { return index == 1 ? 1 : 0.1 }, 
        'power3.in', 
        false
    );
});

</script>

<style>
html,
body,
label {
    font-family: 'Roboto', sans-serif;
}
.HomepageTile {
    opacity: 0; /* Initial state */
    visibility: hidden; /* Prevents flashing */
    will-change: opacity, transform; /* Helps retain rendering */
}

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
