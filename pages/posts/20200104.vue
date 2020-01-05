<template>
    <div class="post-page__title">第一篇的內容</div>
</template>
<script>
import baseLayout from '@/components/organisms/base'
export default {
    props: {
        head_title: {
            type: String,
            default: 'post'
        },
        root: {
            type: String,
            default: '/'
        }
    },
    data() {
        return {
            head_title: 567
        }
    },
    components: { baseLayout },
    mounted() {}
}
</script>
<style lang="scss" scoped>
.post-page {
    &__title {
        font-size: 30px;
    }
}
</style>