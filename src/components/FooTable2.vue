<template>
  <div class="container">
    <div class="row">

      <!-- destoryData Modal -->
      <div class="modal fade" id="destoryModal" tabindex="-1" role="dialog" aria-labelledby="destoryModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="destoryModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">確認刪除</button>
            </div>
          </div>
        </div>
      </div>

      <!-- InsertdData Modal -->
      <div class="col-12 mb-4">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-backdrop="static" data-keyboard="false">
          Add New Row
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary add-row">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-4">
        <a href="#add" class="btn btn-info add-row">Add New Row</a>
        Search: <input id="filter" type="text" />
      </div>
      <div class="col-12">
        <table class="table demo table-bordered" data-filter="#filter" data-page-size="5">
          <thead>
            <tr>
              <th data-toggle="true">
                First Name
              </th>
              <th data-hide="phone">
                Last Name
              </th>
              <th data-hide="tablet,phone">
                Job Title
              </th>
              <th data-hide="tablet,phone">
                DOB
              </th>
              <th data-hide="tablet,phone">
                Status
              </th>
              <th data-sort-ignore="true" data-hide="tablet,phone" data-name="Delete"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Isidra</td>
              <td>
                <a href="#">Boudreaux</a>
              </td>
              <td>Traffic Court Referee</td>
              <td data-value="78025368997">22 Jun 1972</td>
              <td data-value="1">
                <span class="status-metro status-active" title="Active">Active</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Shona</td>
              <td>Woldt</td>
              <td>
                <a href="#">Airline Transport Pilot</a>
              </td>
              <td data-value="370961043292">3 Oct 1981</td>
              <td data-value="2">
                <span class="status-metro status-disabled" title="Disabled">Disabled</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Granville</td>
              <td>Leonardo</td>
              <td>Business Services Sales Representative</td>
              <td data-value="-22133780420">19 Apr 1969</td>
              <td data-value="3">
                <span class="status-metro status-suspended" title="Suspended">Suspended</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Easer</td>
              <td>Dragoo</td>
              <td>Drywall Stripper</td>
              <td data-value="250833505574">13 Dec 1977</td>
              <td data-value="1">
                <span class="status-metro status-active" title="Active">Active</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Maple</td>
              <td>Halladay</td>
              <td>Aviation Tactical Readiness Officer</td>
              <td data-value="694116650726">30 Dec 1991</td>
              <td data-value="3">
                <span class="status-metro status-suspended" title="Suspended">Suspended</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Maxine</td>
              <td>
                <a href="#">Woldt</a>
              </td>
              <td>
                <a href="#">Business Services Sales Representative</a>
              </td>
              <td data-value="561440464855">17 Oct 1987</td>
              <td data-value="2">
                <span class="status-metro status-disabled" title="Disabled">Disabled</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Lorraine</td>
              <td>Mcgaughy</td>
              <td>Hemodialysis Technician</td>
              <td data-value="437400551390">11 Nov 1983</td>
              <td data-value="2">
                <span class="status-metro status-disabled" title="Disabled">Disabled</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Lizzee</td>
              <td>
                <a href="#">Goodlow</a>
              </td>
              <td>Technical Services Librarian</td>
              <td data-value="-257733999319">1 Nov 1961</td>
              <td data-value="3">
                <span class="status-metro status-suspended" title="Suspended">Suspended</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Judi</td>
              <td>Badgett</td>
              <td>Electrical Lineworker</td>
              <td data-value="362134712000">23 Jun 1981</td>
              <td data-value="1">
                <span class="status-metro status-active" title="Active">Active</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Lauri</td>
              <td>Hyland</td>
              <td>Blackjack Supervisor</td>
              <td data-value="500874333932">15 Nov 1985</td>
              <td data-value="3">
                <span class="status-metro status-suspended" title="Suspended">Suspended</span>
              </td>
              <td>
                <a class="row-delete" href="#">
                  <i class="fas fa-times"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot class="hide-if-no-paging">
            <tr>
              <td colspan="6">
                <div class="pagination pagination-centered"></div>
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  </div>
</template>
<script>
import FooTable from 'footable/dist/footable.all.min'
export default {
  name: 'footable2',
  created () {

    $(function () {
      $('table').footable().on('click', '.row-delete', function (e) {
        console.info('row-delete')

        e.preventDefault()

        if (confirm("確認刪除?")) {
          // get the footable object
          var footable = $('table').data('footable')

          // get the row we are wanting to delete
          var row = $(this).parents('tr:first')

          // delete the row
          footable.removeRow(row)
        }
      })

      $('.add-row').click(function (e) {
        console.info('add-row')
        e.preventDefault()

        // get the footable object
        var footable = $('table').data('footable')

        // build up the row we are wanting to add
        var newRow = '<tr><td>Isidra</td><td><a href="#">Boudreaux</a></td><td>Traffic Court Referee</td><td data-value="78025368997">22 Jun 1972</td><td data-value="1"><span class="status-metro status-active" title="Active">Active</span></td><td><a class="row-delete" href="#"><i class="fas fa-times"></i></a></td></tr>'

        // add it
        footable.appendRow(newRow)

        $('#exampleModal').modal('hide')
      })

    });



  },
  mounted () {
    (function () {

    }())

    var filter = document.getElementById('filter')
    filter.value = 'Active'
    filter.dispatchEvent(new Event('keyup'))
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
  }
}
</script>
<style lang="css" >
@import 'footable/css/footable.core.min.css';
</style>
