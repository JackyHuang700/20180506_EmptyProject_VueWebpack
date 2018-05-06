<template>
  <div class="container">
    <div class="row">
      <div class="row">

        <select id="select2-multiple" class="select2-multiple" multiple="multiple">
          <!--   <option value="1">Adams</option>
  <option value="2">Allen</option>
  <option value="3">Peter</option>
  <option value="4">Dana</option>
  <option value="5">Daisy</option> -->
        </select>

      </div>
    </div>
  </div>
</template>
<script>
import 'select2/dist/js/select2.min.js'
export default {
  name: 'select2',
  created () { },
  mounted () {
    var options = [
      { id: 1, text: 'bug' },
      { id: 2, text: 'duplicate' },
      { id: 3, text: 'invalid' },
      { id: 4, text: 'wontfix' },
      { id: 5, text: 'enhancement' }
    ]
    $('.select2-multiple').select2({
      data: options,
      maximumInputLength: 10,
      minimumInputLength: 1,
      tags: true,
      tokenSeparators: [',', ' ']
    })
  },
  methods: {}
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>
