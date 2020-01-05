import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2534821a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _2d6ea286 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _94a4f78e = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages_posts" */))
const _3c4b4e29 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _4c8b58ba = () => interopDefault(import('..\\pages\\posts\\20200104.vue' /* webpackChunkName: "pages_posts_20200104" */))
const _4c99703b = () => interopDefault(import('..\\pages\\posts\\20200105.vue' /* webpackChunkName: "pages_posts_20200105" */))
const _745e75c8 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _0d1d99b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/nuxt/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2534821a,
    name: "about"
  }, {
    path: "/contact",
    component: _2d6ea286,
    name: "contact"
  }, {
    path: "/posts",
    component: _94a4f78e,
    children: [{
      path: "",
      component: _3c4b4e29,
      name: "posts"
    }, {
      path: "20200104",
      component: _4c8b58ba,
      name: "posts-20200104"
    }, {
      path: "20200105",
      component: _4c99703b,
      name: "posts-20200105"
    }]
  }, {
    path: "/test",
    component: _745e75c8,
    name: "test"
  }, {
    path: "/",
    component: _0d1d99b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
