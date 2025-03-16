<template>
    <div class="grid gap-6 grid-cols-12 h-full mx-6 ">
        <div class="col-span-8 scroll overflow-scroll flex flex-col gap-4 h-[100%] text-white">
            <h2 class="text-white text-3xl font-bold">Worktube</h2>
            <div class="main-view bg-gray-400/20 min-h-[70%] shadow-md rounded-md overflow-clip"><img
                    :src="currentWorkData.image" alt="" class="w-full h-full object-contain"></div>
            <h3 class="text-2xl">{{ currentWorkData.title }}</h3>
            <ul class="tech-stack flex gap-4 w-fit">
                <li v-for="tech in currentWorkData.techStack" :key="tech" class="tech">{{ tech }}</li>
            </ul>
            <h4 class="bg-black/60  rounded-md text-lg font-medium py-5 px-2">{{ currentWorkData.subtitle }}</h4>
            <p class="font-semibold text-md">Key Highlights</p>
            <div v-for="comment in currentWorkData.comments" :key="comment" class=" comment-box ">
                <div class="size-8 rounded-[50%] bg-gray-500"></div> {{ comment }}
            </div>
        </div>
        <div class="col-span-4 scroll overflow-scroll flex flex-col gap-4 h-[100%]">
            <h3 class="text-white text-2xl p-3">What I can do and What I have done</h3>
            <div class="tile" :class="{ 'activeTile': currentWork === work.id }" v-for="work in works" :key="work.id" @click="setCurrentWork(work.id)">
    <div class="bg-gray-200 rounded h-full max-w-[40%] overflow-clip object-contain">
        <img :src="work.image" alt="" class="">
    </div>
    <p class="text-white text-md line-clamp-2 p-2">{{ work.title }}</p>
</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import gsap from 'gsap';

const works = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        subtitle: 'Developed a robust e-commerce platform using React and Redux',
        techStack: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Node.js'],
        comments: [
            'Implemented a scalable architecture to handle high traffic',
            'Integrated secure payment gateways and real-time order tracking',
            'Enhanced user experience with dynamic filtering and sorting'
        ],
        image: 'https://picsum.photos/200/304'
    },
    {
        id: 2,
        title: 'Social Media App',
        subtitle: 'Built a feature-rich social media application with real-time updates',
        techStack: ['HTML', 'CSS', 'Javascript', 'React', 'Firebase'],
        comments: [
            'Developed real-time messaging and notification features',
            'Implemented user authentication and authorization with Firebase',
            'Optimized performance for a seamless user experience'
        ],
        image: 'https://picsum.photos/200/310'
    },
    {
        id: 3,
        title: 'Project Management Tool',
        subtitle: 'Created a project management tool to streamline team collaboration',
        techStack: ['HTML', 'CSS', 'Javascript', 'Vue', 'Vuex', 'Node.js'],
        comments: [
            'Designed intuitive user interfaces for task management',
            'Integrated third-party APIs for enhanced functionality',
            'Facilitated real-time collaboration with WebSocket'
        ],
        image: 'https://picsum.photos/210/300'
    },
    {
        id: 4,
        title: 'Blogging Platform',
        subtitle: 'Developed a scalable blogging platform with Nuxt.js and Contentful',
        techStack: ['HTML', 'CSS', 'Javascript', 'Nuxt.js', 'Contentful'],
        comments: [
            'Implemented server-side rendering for improved SEO',
            'Integrated Contentful CMS for easy content management',
            'Enhanced user experience with responsive design'
        ],
        image: 'https://picsum.photos/200/301'
    },
    {
        id: 5,
        title: 'Video Streaming Service',
        subtitle: 'Built a high-performance video streaming service with React and Node.js',
        techStack: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'AWS'],
        comments: [
            'Implemented video uploading, encoding, and streaming features',
            'Optimized video playback for various devices and networks',
            'Ensured security and scalability with AWS services'
        ],
        image: 'https://picsum.photos/201/300'
    }
];

const currentWork = ref(1);

const currentWorkData = computed(() => {
    return works.find(work => work.id === currentWork.value);
});

watch(currentWork, () => {
    gsap.fromTo('.main-view', { opacity: 0 }, { opacity: 1, duration: 1 });
});

function setCurrentWork(id) {
    currentWork.value = id;
}
</script>

<style>
.tile {
    @apply w-full min-h-[8rem] rounded-lg flex gap-2 cursor-pointer;
}
.glass-3 {
    @apply bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-20
}

.activeTile {
    @apply  bg-gradient-to-r from-black/70 to-gray-300/10 shadow-lg transition-all;
}

.comment-box {
    @apply rounded-md p-2 h-40;
}

.tech {
    @apply bg-gray-500 rounded px-3 py-1 shadow-md;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>