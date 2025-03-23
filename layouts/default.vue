<template>
    <div class="relative default-layout flex flex-col items-center justify-center h-[100dvh] w-full overflow-hidden p-4 md:p-6 lg:p-8 xl:p-12">
        <!-- Background Video -->
        <video autoplay muted loop id="myVideo" class="fixed object-cover w-full h-full">
            <source src="https://videos.pexels.com/video-files/6444411/6444411-uhd_2560_1440_30fps.mp4" type="video/mp4">
        </video>

        <!-- Main Wrapper (No Scroll) -->
        <div class="flex w-full h-full max-lg:flex-col-reverse items-center gap-5 overflow-hidden">
            <!-- Navbar (Fixed Height) -->
            <Navbar 
                ref="navbar" 
                v-if="route.path !== '/'" 
                class="flex-shrink-0 pb-4 md:pb-6 lg:pb-8"
                :class="{ 'h-[10dvh] md:h-[12dvh] lg:h-[14dvh]' : route.path !== '/' }"
            />

            <!-- Main Content (Takes Remaining Space) -->
            <div 
                class="w-full lg:h-full lg:!max-h-[1200px] flex-grow rounded-[10px] md:rounded-[20px] vr-frame flex justify-center "
                :class="{ 'glass-vr-bg': route.path !== '/' }"
            >
                <div ref="windowRef" class="relative w-full h-full flex items-center justify-center">
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

// Prevent stacked animations and opacity issues
const animateElements = () => {
    if (windowRef.value) {
        gsap.killTweensOf(windowRef.value); // Stop any ongoing animations
        gsap.set(windowRef.value, { opacity: 1 }); // Ensure full opacity before starting
        
        gsap.fromTo(
            windowRef.value,
            { opacity: 0, y: 50 },
            { 
                duration: 1, 
                opacity: 1, 
                y: 0, 
                ease: "power3.out",
                onComplete: () =>{ 
                    document.querySelector('.vr-frame').classList.add('overflow-auto')
                    gsap.set(windowRef.value, { clearProps: "opacity" })} // Reset styles
            }
        );
    }

    if (navbar.value?.$el?.childNodes[1]) {
        const children = gsap.utils.toArray(navbar.value.$el.childNodes[1].childNodes);

        gsap.killTweensOf(children); // Prevent animation stacking
        gsap.set(children, { opacity: 1 }); // Ensure full opacity
        
        gsap.fromTo(
            children,
            { opacity: 0, scale: 0.5 },
            {
                duration: 0.2,
                opacity: 1,
                scale: 1,
                ease: "back.out",
                stagger: 0.1
            }
        );
    }
};

onMounted(() => {
    animateElements();
});

watch(route, () => {
    gsap.set(windowRef.value, { opacity: 1 }); // Reset opacity before animation
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
    @apply bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-4 md:p-6 lg:p-8 xl:p-12 overflow-auto;
}

.scroll::-webkit-scrollbar {
    display: none; /* Hide scrollbars */
}

/* Apply to the entire document */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

/* For Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
}

video#myVideo {
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
