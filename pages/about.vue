<template>
    <base-layout>
        <div class="about__title">Hi 我是Jay 正在測試nuxt 在 github上的靜態頁面</div>
    </base-layout>
</template>
<script>
import baseLayout from '@/components/organisms/base'
export default {
    head: {
        title: '關於我的部分'
    },
    components: { baseLayout }
}
</script>
<style lang="scss" scoped>
.about {
    &__title {
        font-size: 30px;
    }
}
</style>