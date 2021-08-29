<template>
    <div>
        <div class="flex items-center mb-5 space-x-3">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-light-blue text-primary-blue">
                <slot name="icon"/>
            </div>
            <h1 class="text-2xl font-semibold text-black-blue">{{ title }}</h1>
        </div>
        <p class="text-base font-medium leading-relaxed text-text-grey">
            <slot name="content"/>
        </p>
        <nuxt-link to="/about" class="inline-flex items-center mt-3 text-primary-blue hover:underline">
            <span class="font-medium">Lees meer</span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'AboutBlock',
    props: {
        title: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        }
    }
}
</script>