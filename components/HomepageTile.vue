<template>
    <div class="homepage-tile">
        <slot></slot>
    </div>
</template>

<style>
.homepage-tile{

    @apply h-full w-full bg-gray-400 backdrop-filter backdrop-blur-[6px] bg-opacity-[.2] p-3 md:p-5 flex items-center text-xl box-border font-light hover:bg-opacity-50 outline-gray-100/50 hover:cursor-pointer  hover:size-[105%] 
   hover:shadow hover:shadow-gray-50/20 transition-all ;
 
 
    
    
    }
    .homepage-tile:hover{
    background-color: transperent;
    transition: background-color 2s linear;
}
</style>