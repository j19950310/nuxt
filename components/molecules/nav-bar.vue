<template>
    <div class="nav-bar">
        <nuxt-link
            :to="page.link"
            v-for="(page, index) in pages"
            :key="index"
            class="nav-bar__item"
        >
            <span class="nav-bar__item-text">{{ page.title }}</span>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        pages: {
            type: Array,
            default: function() {
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$effectColor_start: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(221, 219, 219, 1) 50%,
    rgba(255, 255, 255, 1) 100%
);
$effectColor_end: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(221, 219, 219, 1) 50%,
    rgba(0, 0, 0, 1) 100%
);
$transition_duration: 0.2s;
.nav-bar {
    display: flex;
    z-index: 99;
    &__item {
        & + & {
            margin-left: 10px;
        }
        position: relative;
        padding: 3px 6px;
        white-space: nowrap;
        overflow: hidden;
        &::before,
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background-image: $effectColor_start;
            transition: 0s;
        }
        &:before {
            top: 0;
            left: 0;
            transform: translateX(-100%);
        }
        &:after {
            bottom: 0;
            right: 0;
            transform-origin: center;
            transform: rotate(-180deg) translateX(-100%);
        }
        &:hover {
            text-decoration: none;
            .nav-bar__item-text {
                transform: rotate(-15deg);
                &::before {
                    transform: rotate(0deg) translateY(-100%);
                    transition: transform $transition_duration ease
                        $transition_duration * 3;
                }
                &::after {
                    transform: rotate(180deg) translateY(-100%);
                    transition: transform $transition_duration ease
                        $transition_duration;
                }
            }
            &::before {
                transform: rotate(0deg) translateX(100%);
                transition: transform $transition_duration ease;
            }
            &::after {
                transform: rotate(-179deg) translateX(100%);
                transition: transform $transition_duration ease
                    $transition_duration * 2;
            }
        }
        &-text {
            color: black;
            transform: rotate(0deg);
            transition: 0s;
            font-size: 20px;
            &::before,
            &::after {
                position: absolute;
                content: '';
                width: 1px;
                height: 100%;
                transform-origin: center;
                background-image: $effectColor_end;
                transition: 0s;
            }
            &:before {
                top: 0;
                left: 0;
                transform: translateY(100%);
            }
            &:after {
                bottom: 0;
                right: 0;
                transform: rotate(180deg) translateY(100%);
            }
        }
    }
}
</style>
