<template>
    <div>
        <nuxt-link v-for="(item, index) in posts" :key="index" :to="root+item.link">{{item.title}}</nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        root: {
            type: String,
            default: '/'
        }
    },
    data() {
        return {
            posts: [
                { link: '20200104', title: '第一篇' },
                { link: '20200105', title: '第二篇' }
            ],
            root_link: ''
        }
    }
}
</script>
<style scoped>
</style>
