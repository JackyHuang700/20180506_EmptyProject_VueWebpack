<template>
  <div id="app">
      <Navbar :narbarList="narbarList" />
      <router-view></router-view>
  </div>
</template>

<script>
// import { Header as AppHeader } from '../components/'
import Navbar from '../components/Navbar'

export default {
  name: 'full',
  components: {
    Navbar
  },
  data () {
    return {

      narbarList: [

      ]

    }
  },
  computed: {

  }
}
</script>
<style>

</style>


