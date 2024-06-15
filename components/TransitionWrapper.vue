components/TransitionWrapper.vue
<template>
    <div ref="wrapper">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';
  
  const props = defineProps({
    enterTransition: {
      type: String,
      default: 'fade',
    },
    leaveTransition: {
      type: String,
      default: 'fade',
    },
    duration: {
      type: Number,
      default: 1,
    },
  });
  
  const wrapper = ref(null);
  
  const leaveAnimation = () => {
    return new Promise((resolve) => {
      let animation;
      switch (props.leaveTransition) {
        case 'slide-left':
          animation = gsap.to(wrapper.value, {
            duration: props.duration,
            x: '-100%',
            onComplete: resolve,
          });
          break;
        case 'slide-right':
          animation = gsap.to(wrapper.value, {
            duration: props.duration,
            x: '100%',
            onComplete: resolve,
          });
          break;
        case 'fade':
        default:
          animation = gsap.fromTo(wrapper.value, {
            clipPath: 'polygon(0%,0%,100%,0%,100%,100%,100%,0%)'
          },{
            clipPath: 'polygon(0%,0%,100%,0%,100%,100%,100%,0%)'
          ,duration:1});
          break;
      }
    });
  };
  
  const enterAnimation = () => {
    switch (props.enterTransition) {
      case 'slide-left':
        gsap.from(wrapper.value, {
          duration: props.duration,
          x: '100%',
          stagger:.1
        });
        break;
      case 'slide-right':
        gsap.from(wrapper.value, {
          duration: props.duration,
          x: '-100%',
        });
        break;
      case 'fade':
      default:
        gsap.from(wrapper.value, {
          duration: props.duration,
          opacity: 0,
        });
        break;
    }
  };
  
  onMounted(() => {
    enterAnimation();
  });
  const transitionWrapper = ref(null);

onBeforeRouteLeave((to, from, next) => {
leaveAnimation().then(() => {
    next();
  });
})
  defineExpose({ leaveAnimation });
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  