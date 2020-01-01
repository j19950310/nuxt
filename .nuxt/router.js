import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2534821a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _2d6ea286 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _1243c7f6 = () => interopDefault(import('..\\pages\\Article\\post1.vue' /* webpackChunkName: "pages_Article_post1" */))
const _122798f4 = () => interopDefault(import('..\\pages\\Article\\post2.vue' /* webpackChunkName: "pages_Article_post2" */))
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
    path: "/Article/post1",
    component: _1243c7f6,
    name: "Article-post1"
  }, {
    path: "/Article/post2",
    component: _122798f4,
    name: "Article-post2"
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
