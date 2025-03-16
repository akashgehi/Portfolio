<template>
    <div class="p-6 md:p-12 mx-auto max-w-5xl h-100% bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-500 pb-6">
            <div>
                <h1 class="text-5xl font-bold text-white">Akash Gehi</h1>
                <p class="text-3xl text-white/90 font-extralight">Senior Software Engineer</p>
            </div>
            <div class="mt-6 md:mt-0 text-white/90 text-xl font-extralight md:text-right space-y-1">
                <p><a href="mailto:theakashgehi@gmail.com" class="hover:text-blue-400">theakashgehi@gmail.com</a></p>
                <p><a href="https://github.com/akashgehi" class="hover:text-blue-400">github.com/akashgehi</a></p>
                <p>Pune, India</p>
            </div>
        </div>

        <!-- Summary -->
        <section class="mt-8">
            <h2 class="section-title">Professional Summary</h2>
            <p class="text-white/90 text-2xl font-extralight leading-relaxed">
                Frontend Developer with <b> 3 years of experience</b> in building <b>scalable</b>, <b>responsive</b>, and 
                <b>high-performance</b> web applications. Proficient in <b>React.js</b>, <b>Next.js</b>, and modern tools, with expertise in 
                <b>JavaScript</b> and <b>TypeScript</b>. Skilled in optimizing <b>performance</b>, ensuring <b>WCAG compliance</b>, and creating 
                reusable components. Experienced in delivering <b>user-centric solutions</b> in <b>agile environments</b>.
            </p>
        </section>

        <!-- Skills -->
        <section class="mt-8">
            <h2 class="section-title">Skills</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white/90 text-2xl font-extralight">
                <li><b>Frontend:</b> React.js, Next.js, Vue.js, Nuxt.js, HTML5, CSS3</li>
                <li><b>API Integration:</b> REST APIs, GraphQL</li>
                <li><b>Optimization:</b> Performance, SEO, Accessibility (WCAG 2.1)</li>
                <li><b>Development Tools:</b> Git, Webpack, Jenkins, Agile Workflows</li>
            </ul>
        </section>

        <!-- Experience -->
        <section class="mt-8">
            <h2 class="section-title">Professional Experience</h2>
            <div class="mt-4">
                <h3 class="text-3xl text-white font-semibold">Dassault Systems, Pune</h3>
                <p class="text-white/90 text-2xl font-extralight italic">Software Engineering Specialist (May 2022 – Present)</p>
                <ul class="list-disc ml-6 text-white/90 text-2xl font-extralight space-y-2 mt-2">
                    <li>Achieved <b>40% faster page load times</b> using <b>lazy loading</b>, caching, and optimized asset bundling.</li>
                    <li>Developed a <b>reusable component library</b>, cutting development time by <b>45%</b>.</li>
                    <li>Implemented a <b>JSON-based API prototype</b>, reducing build size and improving speed.</li>
                    <li>Led <b>accessibility enhancements</b> for WCAG 2.1 AA compliance.</li>
                    <li>Mentored junior developers in <b>performance optimization</b> and frontend best practices.</li>
                </ul>
            </div>
        </section>

        <!-- Key Projects -->
        <section class="mt-8">
            <h2 class="section-title">Key Projects</h2>

            <div class="mt-4">
                <h3 class="text-3xl text-white font-semibold">Enterprise CMS for Global Websites</h3>
                <ul class="list-disc ml-6 text-white/90 text-2xl font-extralight space-y-2 mt-2">
                    <li>Improved rendering performance, reducing page load times by <b>35%</b>.</li>
                    <li>Replaced third-party plugins with <b>custom solutions</b>, reducing build size by <b>25%</b>.</li>
                </ul>
            </div>

            <div class="mt-6">
                <h3 class="text-3xl text-white font-semibold">Frontend Component Library Development</h3>
                <ul class="list-disc ml-6 text-white/90 text-2xl font-extralight space-y-2 mt-2">
                    <li>Designed a <b>Vue.js component library</b> to standardize UI elements, reducing design inconsistencies by <b>30%</b>.</li>
                </ul>
            </div>

            <div class="mt-6">
                <h3 class="text-3xl text-white font-semibold">Global Web Navigation System</h3>
                <ul class="list-disc ml-6 text-white/90 text-2xl font-extralight space-y-2 mt-2">
                    <li>Developed a scalable <b>global navigation system</b>, reducing menu load times by <b>25%</b>.</li>
                    <li>Integrated an <b>i18n framework</b> for multilingual support.</li>
                </ul>
            </div>
        </section>

        <!-- Education -->
        <section class="mt-8">
            <h2 class="section-title">Education</h2>
            <p class="text-white/90 text-2xl font-extralight"><b>BE in Information Technology</b></p>
            <p class="text-gray-100 text-xl font-extralight">Maharashtra Institute of Technology, Pune (2020)</p>
        </section>
    </div>
</template>

<style scoped>
.section-title {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 6px;
    margin-bottom: 12px;
}
</style>
