<template>
    <div class="main-tile  grid md:grid-cols-12 md:gap-1 bg-gradient-to-bl from-gray-950  to-gray-700 text-white">
        <h1 class="bg-title fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center w-fit md:text-[10rem]  transition-all duration-500 ease-in-out"
            :class="{ 'fade-enter-active': displayTransition }">
            {{ displayComputed }}
        </h1>
        <span class="col-span-12 border border-black gap-1 md:gap-2
        grid grid-cols-12  h-screen p-2 md:p-6">
<HomepageTile @mouseover="changeDisplay('Akash Gehi')" class="HomepageTile col-span-12 md:col-span-8 md:row-span-4">
    <div  @click="router.push('/resume')" class="grid gap-2 items-center grid-cols-12">
                <span class=" col-span-7 md:col-span-8">
                    <h2 class="  text-2xl md:text-4xl drop-shadow-font">Hello! <br> I'm<strong> Akash Gehi</strong></h2>
                    <!-- </span> -->
                    <h3 class=" text-3xl md:text-5xl font-medium">Frontend Developer</h3>
                <p class="mt-3">I build things for the Web</p>
                </span>
                        <div class="col-span-5 rounded-full bg-gradient-to-t from- md:col-span-4 overflow-clip   shadow-sm ">
                            <img src="../public/file-1.png" class="shadow-md my-auto aspect-auto " alt="Akash Gehi" />
                            </div>
        </div>
        </HomepageTile>
<HomepageTile @mouseover="changeDisplay('Socials')" class="HomepageTile col-span-7 md:col-span-4 md:row-span-1 ">
    <div class="secondary-tile">

        <h2>Socials</h2>
    <p class="social-icons text-white grid grid-cols-4 gap-1 items-end justify-end ml-auto ">
        <img src="../public/icons8-github.svg" class="size-full" alt=""/><img src="../public/icons8-linkedin.svg" alt=""><img src="../public/icons8-instagram.svg" alt=""><img src="../public/icons8-gmail.svg" alt="">
    </p>
</div>
</HomepageTile>
<HomepageTile @mouseover="changeDisplay('Resume')" class="HomepageTile col-span-5 md:col-span-4 md:row-span-3 secondary-tile"><h2>Resume</h2><p>Professional Experience and Skills</p></HomepageTile>
<HomepageTile @mouseover="changeDisplay('About')" class="HomepageTile col-span-12 md:col-span-3 md:row-span-3 secondary-tile"><h2>About</h2><p>My Story and Passions</p></HomepageTile>
<HomepageTile @mouseover="changeDisplay('Work')" class="HomepageTile col-span-12 md:col-span-3 md:row-span-3 secondary-tile"><h2>Work</h2><p>Professional Milestones</p></HomepageTile>
<HomepageTile @mouseover="changeDisplay('Website')" class="HomepageTile col-span-6 md:col-span-3 md:row-span-3 secondary-tile"><h2>Website</h2><p>About this Website</p></HomepageTile>
<HomepageTile @mouseover="changeDisplay('Contact')" class="HomepageTile col-span-6 md:col-span-3 md:row-span-3 secondary-tile"><h2>Contact</h2><p>Let's connect and collaborate</p></HomepageTile>
</span>
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
    const tiles = document.querySelectorAll('.HomepageTile')
    gsap.set(tiles, { display: 'none' }) // Set initial visibility to hidden

    const tl = gsap.timeline()

    tiles.forEach((tile, index) => {
        // Generate random x and y values for entry direction
        const x = Math.random() > 0.5 ? 100 : -100
        const y = Math.random() > 0.5 ? 50 : -50

        tl.fromTo(tile,
            { opacity: 0, x, y, scale: 0.9, filter: "blur(10px)", display: 'flex', visibility: 'visible' },
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
    @apply h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-[6px] bg-opacity-[.2] p-5 flex items-center text-xl box-border font-light hover:bg-opacity-5 outline-gray-100/50 hover:cursor-pointer 
    hover:scale-[1.2] hover:shadow hover:shadow-gray-50/20 transition-all
    max-md:mt-2;
    transition-duration: .3s;
}
.HomepageTile{
    @apply hover:scale-[1.5]
}
.secondary-tile{
@apply flex flex-col justify-between items-start gap-2
}
.secondary-tile h2{
@apply text-lg md:text-xl xl:text-2xl tracking-tighter font-extralight shadow-white drop-shadow-font font-mono
}
.secondary-tile p{
    @apply text-lg md:text-2xl xl:text-2xl ml-auto flex-wrap text-right
}
.glass-tile h1,
.glass-tile h2,
.glass-tile p {
    @apply drop-shadow-font;
}

.social-icons img{
    @apply  max-h-[70%] hover:scale-[1.1] transition-all
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
