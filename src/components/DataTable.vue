<template>
  <div>

    <!-- loop through each of your products and display it however you want. we're just printing the name here -->
    <h2>List of Products</h2>
    <ul>
      
      <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>

    </ul>
  </div>
</template>
<script>
import 'datatables'
import {
  apiDataTableDataTableGetAll
} from "../api/api";

export default {
  name: 'datatable',
  created () { },
  mounted () {
    $(document).ready(function () {
      var table = $('#example').DataTable({
        "ajax": apiDataTableDataTableGetAll,
        "processing": true,
        "serverSide": true,
        // "dataSrc": "data",
        // "columns": [
        //   { "data": "name" }
        // ]
      });

    
    });
  }
}
</script>
<style lang="css">
@import 'datatables/media/css/jquery.dataTables.min.css';
</style>
