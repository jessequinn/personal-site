<template>
<footer class="relative py-32 overflow-hidden">
    <div class="container p-5 mx-auto lg:p-0">
        <h1 class="text-2xl font-bold text-center lg:text-4xl text-black-blue">Ready to deliver something amazing?</h1>
        <div class="flex justify-center w-full mt-10 mb-24 space-x-5">
            <div class="relative cursor-pointer w-44 h-14 group">
                <div class="w-full h-full duration-200 transform rounded-md bg-primary-blue group-hover:scale-105 shadow-button"></div>
                <div class="absolute inset-0 flex items-center justify-center m-auto">
                    <span class="font-semibold text-white">Neem contact op</span>
                </div>
            </div>
            <div class="relative w-40 cursor-pointer h-14 group">
                <div class="w-full h-full duration-200 transform bg-white rounded-md group-hover:scale-105 shadow-button"></div>
                <div class="absolute inset-0 flex items-center justify-center m-auto">
                    <span class="font-semibold text-black-blue">Onze services</span>
                </div>
            </div>
        </div>
        <div class="grid grid-flow-row grid-cols-2 gap-10 mx-auto lg:grid-cols-footer lg:max-w-5xl 2xl:max-w-7xl">
            <Logo class="h-auto w-44 col-span-full lg:col-auto" />
            <slot/>
        </div>
    </div>
    <Icon class="absolute top-0 w-32 h-auto lg:w-52 opacity-30 -right-16 lg:-right-20" />
</footer>
</template>

<script>
import Icon from '../../static/icon.svg?inline';
import Logo from '../../static/logo.svg?inline';

export default {
    name: 'Footer',
    components: {
        Icon,
        Logo
    }
}
</script>