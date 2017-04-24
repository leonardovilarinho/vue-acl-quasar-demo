require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import VueAcl from 'vue-acl'
import Vuex from 'vuex'
import Quasar from 'quasar'
import router from './router'

Vue.use(Quasar) // Install Quasar Framework

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { acl_current: '' }
})

Vue.use(VueAcl, { router: router, d_permission: 'any', store: store })

const vue = new Vue({
  el: '#q-app',
  router,
  store: store,
  render: h => h(require('./App'))
})

Quasar.start(() => { vue })
