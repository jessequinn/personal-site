<template>
    <div class="relative p-5 cursor-pointer lg:rounded-lg lg:p-0 h-96 w-96 keen-slider__slide group">
        <div class="absolute flex flex-col items-start justify-between w-full h-full p-5 bg-gray-600 rounded-lg lg:rounded-none bg-opacity-70 project-layer">
            <div>
                <div class="flex items-center gap-2 opacity-75">
                    <span class="font-medium leading-loose tracking-wide text-white">{{ location }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="text-2xl font-medium tracking-wide text-white">{{ project }}</h1>
            </div>
            <button class="flex items-center p-3 space-x-1 text-sm font-semibold text-center transition duration-200 ease-in-out bg-white bg-opacity-75 rounded-md cursor-pointer group-hover:bg-opacity-100 hover:bg-opacity-100 md:space-x-2 lg:px-3 lg:py-2">
                <span>Read more</span>
            </button>
        </div>
        <div class="w-full h-full rounded-lg lg:rounded-none">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectBlock',
    props: {
        location: {
            type: String,
            required: true
        },
        project: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .project-layer {
        width: calc(100% - 2.5rem);
        height: calc(100% - 2.5rem);

        @media (min-width: 1280px) {
            width: 100%;
            height: 100%;
        }
    }
</style>