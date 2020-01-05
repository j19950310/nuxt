<template>
    <base-layout>
        <nuxt-child :root="root" />
    </base-layout>
</template>
<script>
import baseLayout from '@/components/organisms/base'
export default {
    head: {
        title: '關於我的部分'
    },
    data() {
        return {
            root: '/posts/'
        }
    },
    components: { baseLayout }
}
</script>
<style lang="scss" scoped>
.post-page {
    &__title {
        font-size: 30px;
    }
}
</style>