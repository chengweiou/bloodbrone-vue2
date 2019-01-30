import Vue from 'vue'
import Vuex from 'vuex'

import cachePlugin from './plugin'

import modal from './module/modal'
import me from './module/me'
import weapon from './module/weapon'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal, me, weapon,
  },
  plugins: [cachePlugin],
})
