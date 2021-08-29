<template>
<div class="mt-10">
    <div class="absolute inset-0 w-full h-full diagonal-stripes -z-10"></div>
    <section class="container flex flex-col items-center p-6 mx-auto mb-20 lg:mb-20 lg:flex-row gap-x-10 2xl:gap-x-20">
        <div class="lg:max-w-lg 2xl:max-w-xl">
            <SectionTitle class="mb-4">Welkom bij RB Technology</SectionTitle>
            <h1 class="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight text-black-blue">
                Architecture <br>with
                <span class="text-primary-blue">people</span>
                <br>in mind.
            </h1>
            <p class="mt-4 font-medium leading-loose tracking-wide mb-7 text-text-grey">
                Laten we de woongebouwen van heel Europa in kaart brengen zonder overal langs te moeten!
                Studenten help ons om renovatieaanbieders de juiste informatie te geven om een renovatieaanbod te doen
                zonder op locatie te komen.
            </p>
            <div class="flex space-x-5">
                <Button class="text-white bg-primary-blue focus:ring-primary-blue focus:ring-4 focus:ring-opacity-50">
                    <span>Onze services</span>
                    <ArrowIcon class="w-4 h-4 transform rotate-45 md:w-6 md:h-6 stroke-3" />
                </Button>
                <Button class="text-black bg-white shadow-none">
                    <span>Wat we doen</span>
                    <ChevronRightIcon class="w-3 h-3 transform md:w-5 md:h-5 stroke-3" />
                </Button>
            </div>
        </div>
        <div class="justify-end hidden lg:flex lg:gap-x-10 lg:justify-start">
            <picture class="w-7/12 lg:h-xl 2xl:h-2xl">
                <source srcset="/img/hero_left.webp" type="image/webp">
                <source srcset="/img/hero_left.jpg" type="image/jpeg">
                <img class="object-cover object-center h-full" alt="tech drawing" src="/img/hero_left.jpg">
            </picture>
            <picture class="w-7/12 lg:h-xl 2xl:h-2xl">
                <source srcset="/img/hero_right.webp" type="image/webp">
                <source srcset="/img/hero_right.jpg" type="image/jpeg">
                <img alt="manafacturer" class="object-cover object-right h-full" src="/img/hero_right.jpg">
            </picture>
        </div>
    </section>
    <section class="w-full bg-light-grey">
        <div class="container p-6 mx-auto text-center lg:p-20">
            <span class="font-medium text-gray-400">samengewerkt met</span>
            <div class="flex flex-wrap lg:mt-8 lg:flex-nowrap lg:space-x-24 justify-evenly">
                <NuxtLogo class="w-3/6 p-5 transition-all duration-200 opacity-50 cursor-pointer select-none lg:p-0 no-higlight filter grayscale hover:opacity-100 hover:filter-none hover:grayscale-0" />
                <AtomLogo class="w-3/6 p-5 transition-all duration-200 opacity-50 cursor-pointer select-none lg:p-0 no-higlight filter grayscale hover:opacity-100 hover:filter-none hover:grayscale-0" />
                <CapacitorLogo class="w-3/6 p-5 transition-all duration-200 opacity-50 cursor-pointer select-none lg:p-0 no-higlight filter grayscale hover:opacity-100 hover:filter-none hover:grayscale-0" />
                <SvelteLogo class="w-3/6 p-5 transition-all duration-200 opacity-50 cursor-pointer select-none lg:p-0 no-higlight filter grayscale hover:opacity-100 hover:filter-none hover:grayscale-0" />
                <VercelLogo class="w-3/6 p-5 transition-all duration-200 opacity-50 cursor-pointer select-none lg:p-0 no-higlight filter grayscale hover:opacity-100 hover:filter-none hover:grayscale-0" />
            </div>
        </div>
    </section>
    <section class="w-full bg-white lg:py-20">
        <div class="container flex flex-col-reverse px-5 mx-auto lg:flex-row lg:space-x-28 py-14">
            <div class="w-full mb-10 overflow-hidden shadow-lg h-60 lg:shadow-2xl lg:h-auto lg:w-1/2 lg:mb-0">
                <picture class="w-full h-full">
                    <source srcset="/img/mission_vision_values.webp" type="image/webp">
                    <source srcset="/img/mission_vision_values.jpg" type="image/jpeg">
                    <img class="object-cover object-center h-60 lg:h-full" alt="feature" src="/img/mission_vision_values.jpg">
                </picture>
            </div>
            <div class="flex flex-col flex-wrap text-left lg:w-1/2 lg:block lg:py-6">
                <SectionTitle>Over ons</SectionTitle>
                <h1 class="mt-4 text-2xl font-bold leading-tight lg:text-4xl mb-7 lg:leading-tight 2xl:leading-tight text-black-blue">
                    Bij RB Technology hebben we development in ons DNA:
                </h1>
                <div class="flex flex-col items-center mb-10 space-y-7 lg:space-y-10 lg:items-start">
                    <AboutBlock title="Onze Missie">
                        <template v-slot:icon>
                            <LightBulbIcon class="w-6 h-6" />
                        </template>
                        <template v-slot:content>
                            We always strive for customer satisfaction by providing high quality
                            services at competitive prices in the field of construction and...
                        </template>
                    </AboutBlock>
                    <AboutBlock title="Onze Visie">
                        <template v-slot:icon>
                            <BeakerIcon class="w-6 h-6" />
                        </template>
                        <template v-slot:content>
                            We seek sustainable growth to be the one of the most trusted companies on
                            global levels in the field of engineering consultancy...
                        </template>
                    </AboutBlock>
                    <AboutBlock title="Ons product">
                        <template v-slot:icon>
                            <CubeIcon class="w-6 h-6" />
                        </template>
                        <template v-slot:content>
                            Honesty and Integrity, Quality and Safety, Accountability, Teamwork and collaboration,
                            Creativity and Innovation, Flexibility...
                        </template>
                    </AboutBlock>
                </div>
            </div>
        </div>
    </section>
    <section class="w-full lg:py-20">
        <div class="container relative flex flex-wrap justify-center w-full max-w-screen-md px-5 mx-auto lg:px-0 lg:justify-start lg:items-center lg:flex-col">
            <SectionTitle>services die wij leveren</SectionTitle>
            <h1 class="mt-4 text-2xl font-bold leading-tight text-center lg:text-5xl mb-7 lg:leading-tight 2xl:leading-tight text-black-blue">
                Project management en site supervision:
            </h1>
            <p class="font-medium leading-loose tracking-wide text-center mb-7 text-text-grey">
                Vanuit onze passie voor techniek ontwikkelen wij mobiele apps en online platforms die goed werken voor
                jouw organisatie en voor de eindgebruiker. Want wij weten wat werkt en zullen zorgen dat de techniek voor jou werkt.
            </p>
        </div>
        <div class="container relative flex flex-col justify-center max-w-screen-lg px-5 pt-20 mx-auto lg:px-0 lg:flex-row lg:pt-44">
            <h1 class="absolute inset-x-0 top-0 mt-4 font-bold leading-none text-center text-gray-100 select-none text-7xl lg:top-auto lg:-mt-36 -z-10 lg:text-10xl">Services</h1>
            <div class="flex flex-wrap justify-center flex-grow gap-8">
                <ServiceBlock class="service-card" title="Project management">
                    <template v-slot:icon>
                        <div class="p-3 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                    </template>
                    <template v-slot:content>
                        Understanding your ideas, analyzing them, study how feasible they are and help you bring them on the ground
                    </template>
                </ServiceBlock>
                <ServiceBlock class="service-card" title="Concept design">
                    <template v-slot:icon>
                        <div class="p-3 bg-gradient-to-b from-red-300 to-red-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </template>
                    <template v-slot:content>
                        We do design for different types of architectural, structural, and infrastructure projects. Not just a design - sustainable design.
                    </template>
                </ServiceBlock>
                <ServiceBlock class="service-card" title="Variable studies">
                    <template v-slot:icon>
                        <div class="p-3 bg-gradient-to-b from-blue-300 to-blue-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                            </svg>
                        </div>
                    </template>
                    <template v-slot:content>
                        We are here to help you, produce full stack of tender documents and supervise the tendering process for you.
                    </template>
                </ServiceBlock>
                <ServiceBlock class="service-card" title="Prototyping">
                    <template v-slot:icon>
                        <div class="p-3 bg-gradient-to-b from-green-300 to-green-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </template>
                    <template v-slot:content>
                        We are here to help you, produce full stack of tender documents and supervise the tendering process for you.
                    </template>
                </ServiceBlock>
                <ServiceBlock class="service-card" title="Test plan/report">
                    <template v-slot:icon>
                        <div class="p-3 bg-gradient-to-b from-purple-300 to-purple-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </template>
                    <template v-slot:content>
                        We are here to help you, produce full stack of tender documents and supervise the tendering process for you.
                    </template>
                </ServiceBlock>
            </div>
        </div>
    </section>
    <section class="w-full lg:py-20 lg:px-36 2xl:px-72">
        <div class="px-5 pt-14 lg:px-0">
            <SectionTitle>Onze projecten</SectionTitle>
            <div class="flex flex-col items-end lg:flex-row lg:mb-7">
                <div class="w-full lg:w-6/12">
                    <h1 class="mt-4 text-2xl font-bold leading-tight lg:text-5xl mb-7 lg:leading-tight 2xl:leading-tight text-black-blue">
                        A digital wallet has both a software
                        and information componentent.
                    </h1>
                    <p class="font-medium leading-loose tracking-wide text-text-grey">
                        Vanuit onze passie voor techniek ontwikkelen wij mobiele apps en online platforms die goed werken voor
                        jouw organisatie en voor de eindgebruiker. Want wij weten wat werkt en zullen zorgen dat de techniek voor jou werkt.
                    </p>
                </div>
                <div class="justify-end flex-grow hidden gap-5 lg:flex" v-if="slider">
                    <div @click="slider.prev" :class="{ 'active': currentProject > 0 }" class="p-5 transition-all duration-150 ease-in-out border-2 border-gray-300 rounded-full select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div @click="slider.next" :class="{ 'active': currentProject !== slider.details().size - 1 }" class="p-5 transition-all duration-150 ease-in-out border-2 border-gray-300 rounded-full select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div ref="slider" class="pt-3 lg:pt-8 keen-slider lg:pt-14">
            <div class="relative p-5 cursor-pointer lg:rounded-lg lg:p-0 h-96 w-96 keen-slider__slide group">
                <div class="absolute flex flex-col items-start justify-between w-full h-full p-5 bg-gray-600 rounded-lg lg:rounded-none bg-opacity-70 project-layer">
                    <div>
                        <div class="flex items-center gap-2 opacity-75">
                            <span class="font-medium leading-loose tracking-wide text-white">Rabobank Utrecht</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h1 class="text-2xl font-medium tracking-wide text-white">Centraal station Utrecht</h1>
                    </div>
                    <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out bg-white bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-100 hover:bg-opacity-100 md:space-x-2 lg:px-3 lg:py-2">
                        <span>Read more</span>
                    </button>
                </div>
                <div class="w-full h-full rounded-lg lg:rounded-none">
                    <img class="object-cover w-full h-full rounded-lg -z-10 lg:rounded-none" src="../assets/temp/slide_1.jpg" />
                </div>
            </div>
            <div class="relative p-5 cursor-pointer lg:rounded-lg lg:p-0 h-96 w-96 keen-slider__slide group">
                <div class="absolute flex flex-col items-start justify-between w-full h-full p-5 bg-gray-600 rounded-lg lg:rounded-none bg-opacity-70 project-layer">
                    <div>
                        <div class="flex items-center gap-2 opacity-75">
                            <span class="font-medium leading-loose tracking-wide text-white">Binnenhof Den Haag</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h1 class="text-2xl font-medium tracking-wide text-white">Renovatie tweede kamer</h1>
                    </div>
                    <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out bg-white bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-100 hover:bg-opacity-100 md:space-x-2 lg:px-3 lg:py-2">
                        <span>Read more</span>
                    </button>
                </div>
                <div class="w-full h-full rounded-lg lg:rounded-none">
                    <img class="object-cover w-full h-full rounded-lg -z-10 lg:rounded-none" src="../assets/temp/slide_2.jpg" />
                </div>
            </div>
            <div class="relative p-5 cursor-pointer lg:rounded-lg lg:p-0 h-96 w-96 keen-slider__slide group">
                <div class="absolute flex flex-col items-start justify-between w-full h-full p-5 bg-gray-600 rounded-lg lg:rounded-none bg-opacity-70 project-layer">
                    <div>
                        <div class="flex items-center gap-2 opacity-75">
                            <span class="font-medium leading-loose tracking-wide text-white">Centraal station Amsterdam</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h1 class="text-2xl font-medium tracking-wide text-white">Aanleg nieuwe spoorlijnen richting Londen</h1>
                    </div>
                    <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out bg-white bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-100 hover:bg-opacity-100 md:space-x-2 lg:px-3 lg:py-2">
                        <span>Read more</span>
                    </button>
                </div>
                <div class="w-full h-full rounded-lg lg:rounded-none">
                    <img class="object-cover w-full h-full rounded-lg -z-10 lg:rounded-none" src="../assets/temp/slide_3.jpg" />
                </div>
            </div>
            <div class="relative p-5 cursor-pointer lg:rounded-lg lg:p-0 h-96 w-96 keen-slider__slide group">
                <div class="absolute flex flex-col items-start justify-between w-full h-full p-5 bg-gray-600 rounded-lg lg:rounded-none bg-opacity-70 project-layer">
                    <div>
                        <div class="flex items-center gap-2 opacity-75">
                            <span class="font-medium leading-loose tracking-wide text-white">Centrum Rotterdam</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h1 class="text-2xl font-medium tracking-wide text-white">Vernieuwing centrum Rotterdam</h1>
                    </div>
                    <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out bg-white bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-100 hover:bg-opacity-100 md:space-x-2 lg:px-3 lg:py-2">
                        <span>Read more</span>
                    </button>
                </div>
                <div class="w-full h-full rounded-lg lg:rounded-none">
                    <img class="object-cover w-full h-full rounded-lg -z-10 lg:rounded-none" src="../assets/temp/slide_4.jpg" />
                </div>
            </div>
        </div>
        <div class="flex justify-center flex-grow gap-5 pt-3 lg:hidden pb-14" v-if="slider">
            <div @click="slider.prev" :class="{ 'active': currentProject > 0 }" class="p-4 transition-all duration-150 ease-in-out border-2 border-gray-300 rounded-full select-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </div>
            <div @click="slider.next" :class="{ 'active': currentProject !== slider.details().size - 1 }" class="p-4 transition-all duration-150 ease-in-out border-2 border-gray-300 rounded-full select-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

import ArrowIcon from '../assets/svg/arrow_up.svg?inline';
import ChevronRightIcon from '../assets/svg/chevron_right.svg?inline';
import BeakerIcon from '../assets/svg/beaker.svg?inline';
import LightBulbIcon from '../assets/svg/light_bulb.svg?inline';
import CubeIcon from '../assets/svg/cube.svg?inline';

//temp imports
import NuxtLogo from '../assets/temp/nuxt.svg?inline';
import AtomLogo from '../assets/temp/atom.svg?inline';
import CapacitorLogo from '../assets/temp/capacitorjs.svg?inline';
import SvelteLogo from '../assets/temp/svelte.svg?inline';
import VercelLogo from '../assets/temp/vercel.svg?inline';

export default {
    name: 'Home',
    data() {
        return {
            currentProject: 0,
            slider: null
        }
    },
    head() {
        return {
            title: 'Home'
        }
    },
    components: {
        ArrowIcon,
        ChevronRightIcon,
        LightBulbIcon,
        CubeIcon,
        BeakerIcon,
        NuxtLogo,
        AtomLogo,
        CapacitorLogo,
        SvelteLogo,
        VercelLogo
    },
    mounted() {
        this.slider = new KeenSlider(this.$refs.slider, {
            initial: this.currentProject,
            slidesPerView: 1,
            spacing: 25,
            centered: false,
            loop: false,
            breakpoints: {
                "(min-width: 768px)": {
                    slidesPerView: 3,
                    centered: true,
                    spacing: 55
                }
            },
            slideChanged: (s) => {
                this.currentProject = s.details().relativeSlide
            },
        });
    },
    beforeDestroy() {
        if (this.slider) this.slider.destroy();
    }
}
</script>

<style lang="postcss" scoped>
.service-card {
    flex: 1;

    @media (min-width: 1280px) {
        flex: 0 0 calc(33% - 20px);
    }
}

.project-layer {
    width: calc(100% - 2.5rem);
    height: calc(100% - 2.5rem);

    @media (min-width: 1280px) {
        width: 100%;
        height: 100%;
    }
}

.active {
    @apply cursor-pointer !important;
    @apply border-primary-blue !important;
}

.active svg {
    @apply fill-primary-blue !important;
}
</style>
