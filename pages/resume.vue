<template>
    <div class="p-4 sm:p-6  mx-auto max-w-5xl">
        <!-- Header -->
        <header class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-500 pb-4 sm:pb-6">
            <div>
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Akash Gehi</h1>
                <p class="text-xl sm:text-2xl md:text-3xl text-white drop-shadow-sm font-extralight">Senior Software Engineer</p>
            </div>
            <div class="mt-4 sm:mt-6 md:mt-0 text-white drop-shadow-sm text-base sm:text-lg md:text-xl font-extralight md:text-right space-y-1">
                <p>
                    <a href="mailto:theakashgehi@gmail.com" class="hover:text-blue-400" aria-label="Email Akash Gehi at theakashgehi@gmail.com">
                        theakashgehi@gmail.com
                    </a>
                </p>
                <p>
                    <a href="https://github.com/akashgehi" class="hover:text-blue-400" target="_blank" rel="noopener noreferrer"
                        aria-label="Visit Akash Gehi's GitHub profile">
                        github.com/akashgehi
                    </a>
                </p>
                <p>Pune, India</p>
            </div>
        </header>

        <!-- Summary -->
        <section class="mt-6 sm:mt-8">
            <h2 class="section-title">Professional Summary</h2>
            <p class="text-white drop-shadow-sm text-lg sm:text-lg md:text-2xl font-extralight leading-relaxed">
                Frontend Developer with <b>3 years of experience</b> in building <b>scalable</b>, <b>responsive</b>, and 
                <b>high-performance</b> web applications. Proficient in <b>React.js</b>, <b>Next.js</b>, and modern tools, with expertise in 
                <b>JavaScript</b> and <b>TypeScript</b>. Skilled in optimizing <b>performance</b>, ensuring <b>WCAG compliance</b>, and creating 
                reusable components. Experienced in delivering <b>user-centric solutions</b> in <b>agile environments</b>.
            </p>
        </section>

        <!-- Skills -->
        <section class="mt-6 sm:mt-8">
            <h2 class="section-title">Skills</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-white drop-shadow-sm text-lg sm:text-lg md:text-2xl font-extralight">
                <li><b>Frontend:</b> React.js, Next.js, Vue.js, Nuxt.js, HTML5, CSS3</li>
                <li><b>API Integration:</b> REST APIs, GraphQL</li>
                <li><b>Optimization:</b> Performance, SEO, Accessibility (WCAG 2.1)</li>
                <li><b>Development Tools:</b> Git, Webpack, Jenkins, Agile Workflows</li>
            </ul>
        </section>

        <!-- Experience -->
        <section class="mt-6 sm:mt-8">
            <h2 class="section-title">Professional Experience</h2>
            <article class="mt-3 sm:mt-4">
                <h3 class="text-2xl sm:text-3xl text-white font-semibold">Dassault Systems, Pune</h3>
                <p class="text-white drop-shadow-sm text-lg sm:text-xl md:text-2xl font-extralight italic">
                    Software Engineering Specialist (May 2022 – Present)
                </p>
                <ul class="list-disc ml-4 sm:ml-6 text-white drop-shadow-sm text-lg sm:text-lg md:text-2xl font-extralight space-y-1 sm:space-y-2 mt-2">
                    <li>Achieved <b>40% faster page load times</b> using <b>lazy loading</b>, caching, and optimized asset bundling.</li>
                    <li>Developed a <b>reusable component library</b>, cutting development time by <b>45%</b>.</li>
                    <li>Implemented a <b>JSON-based API prototype</b>, reducing build size and improving speed.</li>
                    <li>Led <b>accessibility enhancements</b> for WCAG 2.1 AA compliance.</li>
                    <li>Mentored junior developers in <b>performance optimization</b> and frontend best practices.</li>
                </ul>
            </article>
        </section>

        <!-- Key Projects -->
        <section class="mt-6 sm:mt-8">
            <h2 class="section-title">Key Projects</h2>

            <article class="mt-3 sm:mt-4">
                <h3 class="text-2xl sm:text-3xl text-white font-semibold">Enterprise CMS for Global Websites</h3>
                <ul class="list-disc ml-4 sm:ml-6 text-white drop-shadow-sm text-lg sm:text-lg md:text-2xl font-extralight space-y-1 sm:space-y-2 mt-2">
                    <li>Improved rendering performance, reducing page load times by <b>35%</b>.</li>
                    <li>Replaced third-party plugins with <b>custom solutions</b>, reducing build size by <b>25%</b>.</li>
                </ul>
            </article>
        </section>

        <!-- Education -->
        <section class="mt-6 sm:mt-8 pb-6 sm:pb-8">
            <h2 class="section-title">Education</h2>
            <p class="text-white drop-shadow-sm text-lg sm:text-xl md:text-2xl font-extralight">
                <b>BE in Information Technology</b>
            </p>
            <p class="text-white drop-shadow-sm text-lg sm:text-lg md:text-xl font-extralight">
                Maharashtra Institute of Technology, Pune (2020)
            </p>
        </section>
    </div>
</template>

<style scoped>
.section-title {
    font-size: 1.5rem;
    @apply sm:text-2xl md:text-3xl font-bold text-white border-b border-white/30 pb-2 sm:pb-3 mb-4 sm:mb-6;
}
</style>
