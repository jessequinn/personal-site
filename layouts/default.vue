<template>
<main>
    <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
<!--        <NavigationItem to="/publications">Publications</NavigationItem>-->
<!--        <NavigationItem to="/blog">Blog</NavigationItem>-->
<!--        <NavigationItem to="/contact">Contact</NavigationItem>-->
    </Navigation>
    <Nuxt class="pt-16 lg:pt-0" keep-alive />
</main>
</template>

<style>
a.nuxt-link-exact-active {
    color: #000000;
}
</style>

<script>
export default {
    head() {
        return {
            titleTemplate: '%s | jessequnn',
        }
    },
}
</script>
