<template>
  <div class=" relative flex flex-col gap-12">
    <!-- Universal Container -->
    <div class="w-[90%] mx-auto flex flex-col gap-12">
      <!-- About Section -->
      <div class="flex flex-col lg:flex-row items-center">
        <div class="flex flex-col lg:w-[70%]">
          <h1 class="text-2xl text-gray-50 font-light">About Me</h1>
          <h2 class="text-3xl md:text-4xl xl:text-6xl font-extrabold text-gray-50 mb-6">
            Passionate Frontend Developer
          </h2>
          <p
            class="text-xl lg:text-2xl text-gray-50 font-extralight leading-relaxed"
          >
            Hey there! I'm someone who loves to explore, create, and experiment.
            Whether it's <b>building things on the web</b>,
            <b>diving into new hobbies</b>, or <b>chasing random thoughts</b>, I
            find joy in the little moments.
          </p>
        </div>
        <img
          loading="lazy"
          class="lg:w-[30%] max-w-xs lg:max-w-md mt-6 lg:mt-0"
          src="../public/about-animation-1.gif"
          alt="About animation"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="about-card">
          <h3 class="text-xl text-left">Rapid Learner</h3>
          <p class="text-xl text-left font-extralight">
            Curious by nature, I adapt quickly to new technologies and love
            solving challenges.
          </p>
        </div>
        <div class="about-card">
          <h3 class="text-xl text-left">Knack for New Technologies</h3>
          <p class="text-xl text-left font-extralight">
            Always exploring cutting-edge tools to enhance web experiences.
          </p>
        </div>
        <div class="about-card">
          <h3 class="text-xl text-left">Out-of-the-Box Thinking</h3>
          <p class="text-xl text-left font-extralight">
            I enjoy approaching problems creatively and finding elegant
            solutions.
          </p>
        </div>
      </div>
      <!-- Things I Enjoy Section -->
      <div class="flex flex-col gap-8 items-center">
        <h2 class="text-4xl font-semibold text-white">Things I Enjoy</h2>

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl"
        >
          <div class="interest-item">Gaming</div>
          <div class="interest-item">Music</div>
          <div class="interest-item">Cooking</div>
          <div class="interest-item">Tech Experiments</div>
          <div class="interest-item">Photography</div>
          <div class="interest-item">Reading</div>
          <div class="interest-item">Design</div>
        </div>
      </div>

      <!-- Night Owl Mode Section -->
      <div class="night-owl-card">
        <h2 class="text-4xl font-semibold text-white">Night Owl Mode 🌙</h2>
        <p
          class="text-xl lg:text-2xl text-white font-extralight italic text-left"
        >
          Late nights fuel my creativity. Whether it's coding, brainstorming new
          ideas, or just vibing to music, I find my best work happens when the
          world slows down.
        </p>
      </div>

      <!-- Work Ethos Section -->

      <!-- Personal Mindset -->
      <div class="flex gap-8 flex-col lg:flex-row">
        <p
          class="text-2xl lg:text-3xl text-white font-extralight w-full lg:w-3/5"
        >
          "I believe in embracing curiosity, creating without limits, and
          finding inspiration in the smallest moments. Whether it's late-night
          brainstorming, experimenting with new ideas, or diving deep into a
          creative flow, I love the process of exploring and refining my
          perspective on the world."
        </p>
        <div class="flex flex-col gap-6 w-full lg:w-2/5">
          <h3 class="text-xl font-bold text-white">How I See Things</h3>
          <div class="philosophy-card">
            Creativity: Finding new ways to express and build ideas.
          </div>
          <div class="philosophy-card">
            Exploration: Constantly learning and trying new things.
          </div>
          <div class="philosophy-card">
            Depth: Diving into details and refining every aspect.
          </div>
        </div>
      </div>

      <!-- Random Inspirations -->
      <div class="flex flex-col lg:flex-row items-start gap-8">
        <div class="lg:w-[60%]">
          <h2 class="text-3xl font-extrabold text-white">
            Inspiration Strikes Anytime
          </h2>
          <p class="text-xl text-gray-300 font-light mt-4 leading-relaxed">
            A movie scene, a random street sign, a book passage, or a casual
            conversation— ideas come from the most unexpected places.
          </p>
          <p class="text-3xl text-white font-extralight text-center mt-12">
            "I code, I create, I explore. But most importantly, I enjoy the
            journey."
          </p>
        </div>
        <img
          loading="lazy"
          class="h-[400px] w-fit object-contain rounded-xl shadow-lg"
          src="../public/capture1.jpeg"
          alt="Inspiration"
        />
      </div>

      <!-- Personal Quote -->
      <p class=" text-xl md:text-2xl xl:text-3xl 3xl:text-5xl text-white font-extralight text-center pb-8">
        <strong class="text-xl md:text-3xl xl:text-4xl 3xl:text-5xl">"Beyond the screen</strong>, I thrive on
        creativity and exploration. Whether it’s crafting something new, getting
        lost in a great book, or
        <strong class="text-xl md:text-3xl xl:text-4xl 3xl:text-5xl "
          >experimenting with ideas late into the night</strong
        >, I find inspiration in the little details. Every experience fuels my
        <strong class="text-xl md:text-3xl xl:text-4xl 3xl:text-5xl">curiosity and shapes my perspective."</strong>
      </p>
    </div>
  </div>
</template>

<style scoped lang="css">
.about-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  /* box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.05); */
  /* border: 1px solid rgba(255, 255, 255, 0.15); */
  color: white;
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-3px);
  /* box-shadow: 0px 6px 16px rgba(255, 255, 255, 0.08); */
}

.night-owl-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  /* border: 1px solid rgba(255, 255, 255, 0.05); */
  color: white;
  /* box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.05); */
  transition: all 0.3s ease;
}

.night-owl-card h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.night-owl-card p {
  font-size: 1.2rem;
  font-weight: 300;
}

.night-owl-card:hover {
  transform: scale(1.02);
  /* box-shadow: 0px 6px 14px rgba(255, 255, 255, 0.08); */
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 300;
  color: white;
  /* border: 1px solid rgba(255, 255, 255, 0.05); */
}

.interest-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;
  color: white;
  display: flex;
  white-space: nowrap;
  border-radius: 8px;
  /* border: 1px solid rgba(255, 255, 255, 0.05); */
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.interest-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}
</style>
