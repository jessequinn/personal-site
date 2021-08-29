<template>
<div class="pt-2">
    <h2 class="mb-3 text-base font-semibold lg:mb-5 text-black-blue">{{ title }}</h2>
    <slot/>
</div>
</template>

<script>
export default {
    name: 'FooterColumn',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>