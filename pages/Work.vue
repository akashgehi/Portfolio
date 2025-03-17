<template>
    <div class="grid gap-6 grid-cols-12 h-full">
      <!-- Section Heading -->
      <h2 class="text-white text-lg md:text-2xl font-light lg:text-3xl col-span-12">
        Projects
      </h2>
  
      <!-- Project List Navigation (Accessible & Semantic) -->
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
  
      <!-- Project Details Section -->
      <section
        class="col-span-12 md:col-span-9 xl:col-span-8 scroll overflow-auto flex flex-col gap-4 h-[100%] text-white"
        aria-live="polite"
      >
        <div
          class="main-view bg-gray-400/20 min-h-[70%] shadow-md rounded-md overflow-clip"
        >
          <img
            :src="currentWorkData.image"
            :alt="`Preview of ${currentWorkData.title}`"
            class="w-full h-full object-contain"
          />
        </div>
  
        <h3 class="text-lg mg:text-xl xl:text-3xl inline w-fit">
          {{ currentWorkData.title }}
        </h3>
  
        <!-- Accessible Project Link -->
        <a
          :href="currentWorkData.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-fit border rounded-[20%/50%] py-2 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Visit Project
        </a>
  
        <h4 class="bg-black/60 rounded-md text-lg mg:text-xl xl:text-xl py-5 px-2 font-light">
          {{ currentWorkData.subtitle }}
        </h4>
  
        <!-- Tech Stack List -->
        <ul class="tech-stack flex gap-4 w-fit flex-wrap">
          <li v-for="tech in currentWorkData.techStack" :key="tech" class="tech">
            {{ tech }}
          </li>
        </ul>
  
        <p class="font-semibold text-lg">Key Highlights</p>
  
        <!-- Highlights List (Now Accessible) -->
        <ul class="list-disc flex flex-col gap-2">
          <li
            v-for="comment in currentWorkData.comments"
            :key="comment"
            class="comment-box text-md mg:text-xl xl:text-xl font-extralight list-disc"
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
      title: "E-Commerce Platform",
      subtitle: "Developed a robust e-commerce platform using React and Redux",
      techStack: ["HTML", "CSS", "Javascript", "React", "Redux", "Node.js"],
      comments: [
        "Implemented a scalable architecture to handle high traffic",
        "Integrated secure payment gateways and real-time order tracking",
        "Enhanced user experience with dynamic filtering and sorting",
      ],
      image: "https://picsum.photos/200/304",
      link: "#",
    },
    {
      id: 2,
      title: "Social Media App",
      subtitle: "Built a feature-rich social media application with real-time updates",
      techStack: ["HTML", "CSS", "Javascript", "React", "Firebase"],
      comments: [
        "Developed real-time messaging and notification features",
        "Implemented user authentication and authorization with Firebase",
        "Optimized performance for a seamless user experience",
      ],
      image: "https://picsum.photos/200/310",
      link: "#",
    },
    {
      id: 3,
      title: "Project Management Tool",
      subtitle: "Created a project management tool to streamline team collaboration",
      techStack: ["HTML", "CSS", "Javascript", "Vue", "Vuex", "Node.js"],
      comments: [
        "Designed intuitive user interfaces for task management",
        "Integrated third-party APIs for enhanced functionality",
        "Facilitated real-time collaboration with WebSocket",
      ],
      image: "https://picsum.photos/210/300",
      link: "#",
    },
  ];
  
  const currentWork = ref(1);
  
  const currentWorkData = computed(() => {
    return works.find((work) => work.id === currentWork.value);
  });
  
  watch(currentWork, () => {
    gsap.fromTo(".main-view", { opacity: 0 }, { opacity: 1, duration: 1 });
  });
  
  function setCurrentWork(id) {
    currentWork.value = id;
  }
  </script>
  
  <style>
  .tile {
    @apply w-[80%] xl:w-full xl:min-h-[8rem] rounded-lg flex gap-2 cursor-pointer;
  }
  
  .glass-3 {
    @apply bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-20;
  }
  
  .activeTile {
    @apply bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg shadow-sm transition-all;
  }
  
  .comment-box {
    @apply rounded-md p-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg;
  }
  
  .tech {
    @apply bg-gray-500 rounded px-3 py-1 shadow-md;
  }
  
  /* Improved focus-visible styles for accessibility */
  button:focus-visible,
  a:focus-visible {
    @apply ring-2 ring-white outline-none;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  