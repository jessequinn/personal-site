<template>
    <div class="table px-3 py-1 rounded-full w-max bg-light-blue text-primary-blue">
        <span class="text-xs font-bold tracking-widest uppercase text-primary-blue">
            <slot/>
        </span>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle'
}
</script>