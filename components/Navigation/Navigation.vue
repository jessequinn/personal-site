<template>
<nav class="fixed top-0 z-50 w-full font-semibold lg:sticky lg:top-0 0 body-font lg:mb-8 2xl:mb-24">
    <div :class="{ 'inner-shadow' : navScrolled && !navTriggered, 'bg-white': navScrolled }" class="relative z-50 flex items-center justify-between px-6 py-5 mx-auto transition-all duration-200 lg:relative lg:px-16">
        <div class="hidden space-x-4 lg:block">
            <slot />
        </div>
        <div class="flex items-center space-x-4">
            <nuxt-link class="text-gray-500 transition duration-200 ease-in-out hover:text-gray-900" :to="switchLocalePath('en')">EN</nuxt-link>
            <nuxt-link class="text-gray-500 transition duration-200 ease-in-out hover:text-gray-900" :to="switchLocalePath('pt')">PT</nuxt-link>
        </div>
    </div>
    <!-- side menu -->
    <transition name="fade" mode="in-out">
        <div class="fixed inset-0 z-40 flex flex-col w-full h-full bg-white shadow-2xl lg:hidden" v-if="navTriggered">
            <div class="flex flex-col items-center justify-center flex-1 space-y-10">
                <slot />
            </div>
            <div class="fixed bottom-0 flex justify-between w-full p-8">
                <span class="text-sm tracking-wider text-gray-500">me@jessequinn.info</span>
            </div>
        </div>
    </transition>
</nav>
</template>

<script>
import NavBrand from "../../static/logo.svg?inline";
import LinkedinIcon from "../../assets/svg/linkedin_icon.svg?inline";
import MenuIcon from "../../assets/svg/menu_icon.svg?inline";

export default {
    name: "Navigation",
    data() {
        return {
            navTriggered: false,
            navScrolled: false
        }
    },
    components: {
        NavBrand,
        LinkedinIcon,
        MenuIcon
    },
    created() {
        window.addEventListener('scroll', this.checkScrollPosition);
    },
    destroyed() {
        window.removeEventListener('scroll', this.checkScrollPosition);
    },
    watch: {
        $route() {
            this.navTriggered = false;
        },
    },
    methods: {
        checkScrollPosition(event) {
            if (window.scrollY > 10) {
                this.navScrolled = true;
            } else {
                this.navScrolled = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.inner-shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.menu-icon {
    display: block;
    position: relative;
    width: 32px;
    height: 32px;
    background: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 16px;
        left: 6px;
        width: 20px;
        height: 2px;
        background: #000000;
        border-radius: 300px;
        border-collapse: separate;
        perspective: 1px;
        transition: -webkit-transform .2s;
        transition: transform .2s;
    }

    &:before {
        transform: translateY(-4px);
    }

    &:after {
        transform: translateY(3px);
    }

    &.active {
        &:before {
            transform: translateY(0) rotate(-45deg);
        }

        &:after {
            transform: translateY(0) rotate(45deg);
        }
    }

}
</style>
