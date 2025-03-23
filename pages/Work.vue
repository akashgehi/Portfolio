<template>
  <div class="grid gap-6 grid-cols-12 h-full">
    <h2 class="text-white text-lg md:text-2xl font-light lg:text-3xl col-span-12">
      Projects
    </h2>

    <nav
      class="col-span-12 md:col-span-3 xl:col-span-4 shadow-sm relative scroll overflow-auto flex md:flex-col gap-4 xl:h-[100%]"
      role="tablist"
      aria-label="Project Navigation"
    >
      <button
        v-for="work in works"
        :key="work.id"
        class="rounded-md min-w-[40%] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        :class="{ 'activeTile': currentWork === work.id }"
        @click="setCurrentWork(work.id)"
        role="tab"
        :aria-selected="currentWork === work.id"
      >
        <p class="text-white text-[1rem] font-light xl:text-base line-clamp-2 p-2 lg:p-4">
          {{ work.title }}
        </p>
      </button>
    </nav>

    <section
      class="col-span-12 md:col-span-9 xl:col-span-8 scroll overflow-auto flex flex-col gap-4 h-[100%] text-white"
      aria-live="polite"
    >
      <div class="main-view bg-gray-400/20 min-h-[70%] shadow-md rounded-md overflow-clip relative">
        <img
          v-for="(image, index) in currentWorkData.images"
          :key="index"
          :src="image"
          :alt="`Preview of ${currentWorkData.title} - Image ${index + 1}`"
          class="w-full h-full object-contain"
          v-show="index === currentImage"
        />
          <div class="absolute bottom-2 right-2 bg-gray-900/70 text-white text-sm px-3 py-1 rounded-md">
    {{ currentImage + 1 }} / {{ currentWorkData.images.length }}
  </div>
        <button v-if="currentWorkData.images.length > 1" @click="prevImage" class="absolute left-2 top-1/2 rounded-[50%] bg-gray-400 size-10 ">◀</button>
        <button v-if="currentWorkData.images.length > 1" @click="nextImage" class="absolute right-2 top-1/2 rounded-[50%] bg-gray-400 size-10 ">▶</button>
      </div>

      <h3 class="text-lg md:text-xl xl:text-3xl inline w-fit">
        {{ currentWorkData.title }}
      </h3>

      <a
        :href="currentWorkData.link"
        target="_blank"
        rel="noopener noreferrer"
        class="w-fit border rounded-[20%/50%] py-2 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Visit Project
      </a>

      <h4 class="bg-black/60 rounded-md text-lg md:text-xl xl:text-xl py-5 px-2 font-light">
        {{ currentWorkData.subtitle }}
      </h4>

      <ul class="tech-stack flex gap-4 w-fit flex-wrap">
        <li v-for="tech in currentWorkData.techStack" :key="tech" class="tech">
          {{ tech }}
        </li>
      </ul>

      <p class="font-semibold text-lg">Key Highlights</p>
      <ul class="list-disc flex flex-col gap-2">
        <li
          v-for="comment in currentWorkData.comments"
          :key="comment"
          class="comment-box text-md md:text-xl xl:text-xl font-extralight list-disc"
        >
          {{ comment }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import gsap from "gsap";

const works = [
  {
    id: 1,
    title: "Portfolio Builder",
    subtitle: "A dynamic portfolio builder with customizable templates and real-time previews",
    techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Node.js"],
    comments: [
      "Developed an interactive builder with live editing features",
      "Implemented multiple unique templates with dynamic theme switching",
      "Optimized rendering for seamless user experience and fast load times",
    ],
    images: ["/portfolio-builder.png", "/portfolio-builder-2.png"],
    link: "https://dazzling-stroopwafel-64d8c6.netlify.app",
  },
  {
    id: 2,
    title: "Finance Management",
    subtitle: "A finance tracking app to manage expenses and budgeting effectively",
    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    comments: [
      "Designed and implemented an intuitive UI for tracking financial transactions",
      "Integrated real-time data visualization with interactive charts",
      "Implemented secure authentication and user-specific data storage",
    ],
    images: ["/finance-tracker.png","/finance-tracker-2.png","/finance-tracker-3.png","/finance-tracker-4.png"],
    link: "https://mellow-tulumba-f2c93b.netlify.app",
  },
  {
    id: 3,
    title: "Personal Website",
    subtitle: "My own portfolio website showcasing my skills and projects",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    comments: [
      "Designed and developed a highly interactive and responsive personal portfolio",
      "Implemented smooth animations and transitions with Framer Motion",
      "Optimized for performance, accessibility, and SEO",
    ],
    images: ["https://picsum.photos/240/300", "https://picsum.photos/241/300"],
    link: "https://67db1c71ba20fb3d50eebed8--acash-portfolio.netlify.app",
  },
  {
    "id": 4,
    "title": "3D Product Showcase",
    "subtitle": "Developed an immersive 3D product display website using Three.js",
    "techStack": ["HTML", "CSS", "JavaScript", "Vue", "Three.js"],
    "comments": [
      "Integrated interactive 3D models for real-time product exploration",
      "Optimized performance for smooth rendering and fast interactions",
      "Implemented custom animations and lighting effects"
    ],
    "images": ["https://picsum.photos/230/300", "https://picsum.photos/240/300"],
    "link": "https://sensational-pika-b1c135.netlify.app"
  },
  {
    "id": 5,
    "title": "Daily Activity Tracker",
    "subtitle": "Created a task management and productivity tracking application",
    "techStack": ["Vue", "Vuex", "Node.js", "MongoDB"],
    "comments": [
      "Developed a responsive UI for tracking tasks and progress",
      "Integrated push notifications for task reminders",
      "Designed a scalable architecture for multi-user support"
    ],
    "images": ["/activity-tracker.png","/activity-tracker-2.png"],
    "link": "#"
  },
];

const currentWork = ref(1);
const currentImage = ref(0);

const currentWorkData = computed(() => works.find(work => work.id === currentWork.value));

watch(currentWork, () => {
  currentImage.value = 0;
  gsap.fromTo(".main-view", { opacity: 0 }, { opacity: 1, duration: 1 });
});

function setCurrentWork(id) {
  currentWork.value = id;
}

function prevImage() {
  currentImage.value = (currentImage.value - 1 + currentWorkData.value.images.length) % currentWorkData.value.images.length;
}

function nextImage() {
  currentImage.value = (currentImage.value + 1) % currentWorkData.value.images.length;
}

</script>

<style>
.activeTile {
  @apply bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg shadow-sm transition-all;
}

.comment-box {
  @apply rounded-md p-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg;
}

.tech {
  @apply bg-gray-500 rounded px-3 py-1 shadow-md;
}
</style>