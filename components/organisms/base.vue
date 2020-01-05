<template>
    <div class="container">
        <nav-bar :pages="pages" v-if="pages" class="nav-bar"></nav-bar>
        <slot></slot>
    </div>
</template>
<script>
import navBar from '@/components/molecules/nav-bar'
export default {
    components: {
        navBar
    },
    props: {},
    data() {
        return {
            pages: [
                { link: '/', title: '首頁' },
                { link: '/about', title: '關於我' },
                { link: '/contact', title: '連絡我' },
                { link: '/posts', title: '文章' },
                { link: '/test', title: '原件測試中' }
            ]
        }
    },
    methods: {},
    mounted() {}
}
</script>
<style lang="scss">
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    @media (max-width: 480px) {
        padding: 0px 20px;
    }
    .nav-bar {
        position: absolute;
        top: 20px;
        left: 0;
    }
}
</style>
