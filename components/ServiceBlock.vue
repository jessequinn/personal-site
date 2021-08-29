<template>
<div class="relative z-10 p-10 transition duration-200 ease-in-out transform bg-white rounded-lg shadow-lg cursor-pointer no-select lg:hover:scale-102">
    <div class="flex items-center justify-between mb-5">
        <slot name="icon" />
    </div>
    <h1 class="mb-1 text-2xl font-semibold text-black-blue">{{ title }}</h1>
    <p class="font-medium leading-loose text-text-grey">
        <slot name="content" />
    </p>
</div>
</template>

<script>
export default {
    name: 'ServiceBlock',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.no-select {
    -webkit-tap-highlight-color: transparent;
}
</style>
