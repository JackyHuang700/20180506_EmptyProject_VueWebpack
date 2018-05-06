import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import 'jquery-mockjax/src/jquery.mockjax.js'
// import 'jquery-mockjax'

import {
  apiSelect2Select24GetAll
} from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)
  },

  // jquery mock
  init_jquery () {

  }
}
