<template>
    <div class="flex flex-col items-center justify-center  bg-transparent">
      <h1 class="text-2xl font-light text-center text-white mb-5">
        Let's <b class="font-bold">Connect</b> & <b class="font-bold">Collaborate</b>
      </h1>
  
      <div class="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-lg p-5 border border-white/20">
        <!-- Chat UI -->
        <div class="flex flex-col gap-3 p-3" role="region" aria-label="Chat conversation" aria-live="polite">
          <div v-for="(msg, index) in messages" :key="index" class="w-fit px-3 py-2 rounded-lg text-white" 
               :class="msg.type === 'bot' ? 'bg-white/30 self-start' : 'bg-green-500/30 self-end'">
            <p>{{ msg.text }}</p>
          </div>
        </div>
  
        <!-- Input Box -->
        <div class="flex gap-2 pt-3">
          <label for="message-input" class="sr-only">Type your message</label>
          <input
            id="message-input"
            v-model="userMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 rounded-lg bg-white/40 text-white outline-none focus:bg-white/60"
            @keyup.enter="sendMessage"
          />
          <button @click="sendMessage" aria-label="Send message" class="px-4 py-2 bg-green-500/70 text-white rounded-lg">
            ➤
          </button>
        </div>
  
        <!-- Quick Contact Options -->
        <nav class="flex justify-center gap-4 mt-4" aria-label="Social media links">
          <a v-for="(icon, index) in socialLinks" :key="index" :href="icon.href" target="_blank" rel="noopener" :aria-label="icon.label">
            <img :src="'../'+icon.src" class="w-10 h-10 transition-transform hover:scale-110" :alt="icon.label" />
          </a>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const messages = ref([
    { text: "Hey there! 👋", type: "bot" },
    { text: "Have an idea? Let's bring it to life! 🚀", type: "bot" },
    { text: "Drop a message, or use the links below! 😊", type: "bot" },
  ]);
  
  const userMessage = ref("");
  
  const sendMessage = () => {
    if (userMessage.value.trim() !== "") {
      messages.value.push({ text: userMessage.value, type: "user" });
      userMessage.value = "";
      setTimeout(() => {
        messages.value.push({ text: "Got it! I\'ll get back to you soon. 🚀", type: "bot" });
      }, 1000);
    }
  };
  
  const socialLinks = ref([
    { href: "https://github.com/akashgehi", src: "icons8-github.svg", label: "GitHub" },
    { href: "https://linkedin.com/in/akashgehi", src: "icons8-linkedin.svg", label: "LinkedIn" },
    { href: "https://instagram.com", src: "icons8-instagram.svg", label: "Instagram" },
    { href: "mailto:theakashgehi@gmail.com", src: "icons8-gmail.svg", label: "Gmail" },
  ]);
  </script>
  