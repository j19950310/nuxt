<template>
    <base-layout>
        <btn-round :text="'hello'"></btn-round>
    </base-layout>
</template>
<script>
import baseLayout from '@/components/organisms/base'
import btnRound from '@/components/atoms/btn/btn-round'
export default {
    components: {
        btnRound,
        baseLayout
    }
}
</script>
<style lang="scss" scoped>
</style>