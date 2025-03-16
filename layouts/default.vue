<template>
    <div class="relative default-layout flex flex-col items-center justify-center h-[100vh] w-full overflow-hidden p-4 md:p-6 lg:p-8 xl:p-12">
        <!-- Background Video -->
        <video autoplay muted loop id="myVideo" class="fixed object-cover w-full h-full">
            <source src="/public/video-bg-4.mp4" type="video/mp4">
        </video>

        <!-- Main Wrapper (No Scroll) -->
        <div class="flex w-full h-full max-lg:flex-col-reverse items-center gap-5 overflow-hidden">
            <!-- Navbar (Fixed Height) -->
            <Navbar 
                ref="navbar" 
                v-if="route.path !== '/'" 
                class="flex-shrink-0 pb-4 md:pb-6 lg:pb-8"
                :class="{ 'h-[10vh] md:h-[12vh] lg:h-[14vh]' : route.path !== '/' }"
            />

            <!-- Main Content (Takes Remaining Space) -->
            <div 
                class="w-full lg:h- flex-grow rounded-[10px] md:rounded-[20px] vr-frame flex  justify-center overflow-scroll scroll"
                :class="{ 'glass-vr-bg': route.path !== '/' }"
            >
                <div ref="windowRef" class="relative w-full h-fit flex items-center justify-center">
                    <NuxtPage class="vr-content w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

const { $gsap: gsap } = useNuxtApp();

const route = useRoute();
const navbar = ref(null);
const windowRef = ref(null);

const animateElements = () => {
    if (windowRef.value) {
        gsap.from(windowRef.value, {
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power3.out"
        });

        if (navbar.value?.$el?.childNodes[1]) {
            gsap.utils.toArray(navbar.value.$el.childNodes[1].childNodes).forEach((child, i) => {
                gsap.fromTo(child, {
                    opacity: 0,
                    scale: 0.5,
                }, {
                    duration: 0.2,
                    opacity: 1,
                    scale: 1,
                    delay: i * 0.1,
                    ease: "back.out",
                    stagger: 0.1
                });
            });
        }
    }
};

onMounted(() => {
    animateElements();
});

watch(route, () => {
    animateElements();
});
</script>

<style>
.default-layout {
    perspective: 5000px;
}

.vr-frame {
    max-width: 100%;
    max-height: 100%;
    transform: rotateX(10deg) rotateY(0deg);
}

.glass-vr-bg {
    @apply bg-gray-500 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-4 md:p-6 lg:p-8 xl:p-12;
}

.scroll::-webkit-scrollbar {
    display: none; /* Hide scrollbars */
}

video#myVideo {
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
