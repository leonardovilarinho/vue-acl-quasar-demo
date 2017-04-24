import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', component: load('Page1'), meta: { permission: 'any', fail: '/error' } },
    { path: '/pg2', component: load('Page2'), meta: { permission: 'admin', fail: '/error' } },
    { path: '*', component: load('Error404'), meta: { permission: 'any.admin' } }
  ]
})
