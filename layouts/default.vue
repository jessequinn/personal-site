<template>
<main>
    <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/about">Over ons</NavigationItem>
        <NavigationItem to="/wat-we-doen">Onze services</NavigationItem>
        <NavigationItem to="/wat-we-doen">Onze projecten</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>
    </Navigation>
    <Nuxt class="pt-16 lg:pt-0" keep-alive />
    <Footer>
        <FooterColumn title="Cases">
            <ul>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Utrecht CS</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Binnenhof</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Amsterdam CS</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Rotterdam</a>
                </li>
            </ul>
        </FooterColumn>
        <FooterColumn title="Diensten">
            <ul>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Tendering works</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Supervision</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Project management</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Design works</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Feasibility studies</a>
                </li>
            </ul>
        </FooterColumn>
        <FooterColumn title="Navigatie">
            <ul>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Home</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Over ons</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Onze services</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Onze projecten</a>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <a class="hover:underline" href="#">Contact</a>
                </li>
            </ul>
        </FooterColumn>
        <FooterColumn title="Contactgegevens">
            <ul>
                <li class="text-sm font-medium leading-loose">
                    <span>RB Technology B.V.</span>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <span>Stationsplein 32</span>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <span>3511 ED Utrecht</span>
                </li>
                <li class="mt-4 text-sm font-medium leading-loose">
                    <span>rbtechnology@gmail.com</span>
                </li>
                <li class="text-sm font-medium leading-loose">
                    <span>035 1234 567</span>
                </li>
            </ul>
        </FooterColumn>
    </Footer>
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
            titleTemplate: '%s | RB Technology',
        }
    },
}
</script>
