<template>
  <div class="text-white mx-8 md:mx-16 mt-16">
    <!-- Asymmetrical Grid Layout -->
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <!-- Left Column: Large Typography for Impact -->
      <div class="md:pr-20">
        <h3 class="text-2xl font-light leading-tight">
          Crafted with <b class="text-6xl font-light"> Passion</b>
        </h3>
        <p class="text-3xl font-extralight mt-6">
          Built with a focus on elegance and seamless experience, inspired by Apple’s VR UI and glassmorphism.
        </p>
      </div>

      <!-- Right Column: Compact Feature List -->
      <div class="flex flex-col gap-10">
        <div>
          <h3 class="text-2xl font-light leading-tight">Built with</h3>
          <ul class="flex flex-wrap gap-6 text-4xl font-[400] mt-2">
            <li>Nuxt</li>
            <li>Tailwind</li>
            <li>GSAP</li>
            <li>Netlify</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-light leading-tight">Eco-Friendly</h3>
          <p class="text-2xl font-extralight mt-2">
            Green hosting powered by renewable energy. Optimized for minimal impact.
          </p>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-12 text-center mt-24">
      <div>
        <h3 class="text-5xl font-semibold">98</h3>
        <p class="text-xl font-extralight mt-2">Performance Score</p>
      </div>
      <div>
        <h3 class="text-5xl font-semibold">100%</h3>
        <p class="text-xl font-extralight mt-2">Accessibility Compliance</p>
      </div>
      <div>
        <h3 class="text-5xl font-semibold">0.7s</h3>
        <p class="text-xl font-extralight mt-2">First Contentful Paint</p>
      </div>
    </div>
    <!-- Second Asymmetrical Section -->
    <div class="grid md:grid-cols-2 gap-16 items-center mt-24">
      <!-- Left: Smaller Features, Right: Bold Typography -->
      <div class="flex flex-col gap-10 order-2 md:order-1">
        <div>
          <h3 class="text-2xl font-light leading-tight"><b class="text-5xl font-light">Performance </b>driven</h3>
          <p class="text-2xl font-extralight mt-2">
            Optimized for speed and efficiency, ensuring seamless interactions.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-light leading-tight">Accessibility</h3>
          <p class="text-2xl font-extralight mt-2">
            Designed to be fully inclusive and WCAG-compliant.
          </p>
        </div>
      </div>

      <!-- Large Text for Visual Balance -->
      <div class="md:pl-8 order-1 md:order-2">
        <h3 class="text-2xl font-light leading-tight">Designed for <b class="text-5xl font-light">Impact</b></h3>
        <p class="text-3xl font-extralight mt-6">
          A sleek, future-ready design that embraces minimalism & fluidity.
        </p>
      </div>
    </div>

    
  </div>
</template>

<style scoped>
.text-white {
  color: white;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.md\:mx-16 {
  margin-left: 4rem;
  margin-right: 4rem;
}

.grid {
  display: grid;
}

.gap-16 {
  gap: 4rem;
}

.items-start {
  align-items: start;
}

.items-center {
  align-items: center;
}

.order-2 {
  order: 2;
}

.md\:order-1 {
  order: 1;
}

.md\:order-2 {
  order: 2;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mt-32 {
  margin-top: 8rem;
}

.text-2xl {
  font-size: 1.75rem;
}

.text-3xl {
  font-size: 2rem;
}

.text-4xl {
  font-size: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
}

.text-8xl {
  font-size: 6rem;
}

.font-light {
  font-weight: 300;
}

.font-extralight {
  font-weight: 200;
}

.font-semibold {
  font-weight: 600;
}

.hover\:underline:hover {
  text-decoration: underline;
}
</style>
