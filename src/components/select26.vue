<template>
  <div class="container">
    <div class="row">
      <div class="row">

        <div class="col-12 mb-3">
          <select id="state" class="js-example-basic-single" type="text" style="width:90%">
            <option value="AL">Alabama</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>

        <div class="col-12">
          <input id="new-state" type="text" />
          <button type="button" id="btn-add-state">Set state value</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import 'select2/dist/js/select2.min.js'
export default {
  name: 'select24',
  created () { },
  mounted () {
    $('#state').select2({
      tags: true
    })

    $('#btn-add-state').on('click', function () {
      var newStateVal = $('#new-state').val()
      // Set the value, creating a new option if necessary
      if ($('#state').find("option[value='" + newStateVal + "']").length) {
        $('#state').val(newStateVal).trigger('change')
      } else {
        // Create the DOM option that is pre-selected by default
        var newState = new Option(newStateVal, newStateVal, true, true)
        // Append it to the select
        $('#state').append(newState).trigger('change')
      }
    })
  },
  methods: {}
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>