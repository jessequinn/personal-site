<template>
<div class="mt-10">
    <div class="absolute inset-0 w-full h-full -z-10">
      <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-3xl mx-auto text-center">
            <span class="text-xs text-gray-200 uppercase">Home</span>
            <h2 class="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">Take quick action that increases your brand's regular profit.</h2>
            <p class="mb-6 text-lg text-gray-500 leading-loose">If you have ever wondered how to develop your brand, this is the place for you. Take a big step forward in growing your business with this great tool.</p>
            <div class="flex flex-wrap justify-center"><a class="inline-block w-full sm:w-auto px-6 py-2 mb-3 sm:mb-0 sm:mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200" href="#">Active Demo</a><a class="inline-block w-full sm:w-auto px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Share with your friends</a></div>
          </div>
        </div>
      </section>
    </div>
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
