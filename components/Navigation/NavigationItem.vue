<template>
    <nuxt-link :to="to" class="text-3xl text-gray-500 transition duration-200 ease-in-out lg:text-base hover:text-gray-900">
        <slot/>
    </nuxt-link>
</template>

<script>
export default {
    name: "NavigationItem",
    props: {
        to: {
            type: String,
            required: false
        }
    }
}
</script>
