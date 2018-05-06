// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'
import jquery from 'jquery'

// import footable from 'footable/dist/footable.all.min'
// import 'footable/css/footable.standalone.min.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import mock from './mock'
require('jquery-mockjax')(jquery, window)
mock.init_jquery()

Vue.use({
  install: function (Vue, options) {
    Vue.prototype.$jQuery = require('jquery') // you'll have this.$jQuery anywhere in your vue project
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
