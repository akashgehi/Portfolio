<template>
    <div class="homepage-tile">
        <slot></slot>
    </div>
</template>

<style>
.homepage-tile{

    @apply glass-3 h-full w-full  p-3 md:p-5 flex items-center text-xl box-border font-light hover:bg-opacity-0  
    hover:cursor-pointer 
    hover:backdrop-blur-[1px] transition-all rounded;
    
    }
    .glass-1{
        @apply bg-gray-400 backdrop-filter backdrop-blur-[6px] bg-opacity-[.2]
        outline-gray-100/50
    }
    .glass-3{
        @apply bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-20 py-4
    }
</style>