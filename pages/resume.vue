<template>
    <div class="m-4 gap-1 flex-col z-50 grid-cols-12">
        <div id="titles" class="col-span-12 bg-gray-500 text-3xl items-center content-center place-items-center center text-white">

            <div>Resume</div> <button>Download</button>
        </div>
        <div id="resume" class="mx-auto p-20 col-span-8   backdrop-filter backdrop-blur-[6px] bg-opacity-[.2]  ">
            <img src="../public/cv.png" class=" object-contain  min-h-full min-w-full size-full" />
        </div>
    </div>
</template>
<script setup>
import { useEnterAnimation } from '@/composables/animations.js'
const { enterAnimation } = useEnterAnimation()
onMounted(() => {
    enterAnimation(["#titles",'#resume'])
})
</script>
