<template>
    <base-layout>
        <div @click="translate('.in', 'x')" class="out">
            <div class="in"></div>
        </div>
        首頁
    </base-layout>
</template>
<script>
import baseLayout from '@/components/organisms/base'
import gsap from 'gsap'
export default {
    head: {
        title: 'Jay |  nuxt測試'
    },
    components: {
        baseLayout
    },
    methods: {
        translate(obj, direct) {
            let x = direct === 'x' ? '+=50' : 0
            let y = direct === 'y' ? '+=50' : 0
            console.log(`x:${x} ,y:${y}`)
            gsap.to('.in', { y: y, x: x, duration: 1 })
        },
        test() {}
    },
    mounted() {
        var out = document.querySelector('.out')
        var inside = document.querySelector('.in')
        var io = new IntersectionObserver(
            entries => {
                console.log(entries)
            },
            {
                root: out
            }
        )
        io.observe(inside)
    }
}
</script>
<style lang="scss" scoped>
.out {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    .in {
        width: 50px;
        height: 50px;
        background-color: black;
    }
}
</style>
