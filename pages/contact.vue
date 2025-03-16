<template>
    <div class="min-h-screen flex flex-col justify-center items-center px-6 text-white">
      <!-- Title -->
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-light leading-tight">
          Let's <b class="font-semibold">Connect</b> & <b class="font-semibold">Collaborate</b>
        </h1>
      </div>
  
      <!-- Main Section -->
      <div class="mt-12 w-full max-w-5xl flex flex-col md:flex-row items-start gap-12">
        <!-- Contact Form -->
        <div class="glass flex-1 p-8 rounded-2xl shadow-lg w-full">
          <h2 class="text-2xl font-semibold">Send a Message</h2>
          <form name="contact" method="POST" data-netlify="true" class="mt-6 flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Your Name" class="input" required />
            <input type="email" name="email" placeholder="Your Email" class="input" required />
            <textarea name="message" placeholder="Your Message" class="input h-32" required></textarea>
            <button type="submit" class="btn">Send</button>
          </form>
        </div>
  
        <!-- Contact Info -->
        <div class="flex flex-col gap-6 w-full md:max-w-sm">
          <div>
            <h2 class="text-2xl font-semibold">Email</h2>
            <a href="mailto:theakashgehi@gmail.com" class="text-link">theakashgehi@gmail.com</a>
          </div>
          <div>
            <h2 class="text-2xl font-semibold">GitHub</h2>
            <a href="https://github.com/akashgehi" class="text-link">github.com/akashgehi</a>
          </div>
          <div>
            <h2 class="text-2xl font-semibold">Location</h2>
            <p class="text-gray-300">Pune, India</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .glass {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
  
  .input {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    outline: none;
    transition: 0.3s;
  }
  
  .input:focus {
    background: rgba(255, 255, 255, 0.18);
  }
  
  .input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .btn {
    background: linear-gradient(90deg, #5a67d8, #7f9cf5);
    padding: 14px;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .btn:hover {
    filter: brightness(1.1);
  }
  
  .text-link {
    color: #5ab4ff;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .text-link:hover {
    text-decoration: underline;
  }
  </style>
  