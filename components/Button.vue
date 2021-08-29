<template>
    <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out rounded-md cursor-pointer button shadow-button md:space-x-2 md:text-base lg:px-5 lg:py-3 hover:bg-opacity-90">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style scoped>
    .button {
        backface-visibility: hidden;
    }
</style>