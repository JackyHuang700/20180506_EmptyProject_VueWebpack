<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="tab-pane active w100" id="demo">
          <a data-trigger="footable_expand_all" class="toggle btn btn-secondary mb-3" href="#collapse">全部展開</a>
          <a data-trigger="footable_collapse_all" class="toggle btn btn-danger mb-3" style="display: none" href="#collapse">全部關閉</a>
          <table id="dataTable" class="table table-hover demo table-bordered intercept " data-filter="#filter" data-filtering="true" data-page-size="5" data-page-previous-text="prev" data-page-next-text="next">
            <thead>
              <tr>
                <th data-toggle="true">
                  明細
                </th>
                <th>
                  銷售單號
                </th>
                <th data-hide="all">
                  其他欄位
                </th>
                <th data-hide="all">
                  操作
                </th>
                <th data-hide="all">
                  ...
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>
                  <a href="#">Boudreaux</a>
                </td>
                <td>Traffic Court Referee</td>
                <td data-value="78025368997">22 Jun 1972</td>
                <td data-value="1">
                  <span class="status-metro status-active" title="Active">Active</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Woldt</td>
                <td>
                  <a href="#">Airline Transport Pilot</a>
                </td>
                <td data-value="370961043292">3 Oct 1981</td>
                <td data-value="2">
                  <span class="status-metro status-disabled" title="Disabled">Disabled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Leonardo</td>
                <td>Business Services Sales Representative</td>
                <td data-value="-22133780420">19 Apr 1969</td>
                <td data-value="3">
                  <span class="status-metro status-suspended" title="Suspended">Suspended</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Dragoo</td>
                <td>Drywall Stripper</td>
                <td data-value="250833505574">13 Dec 1977</td>
                <td data-value="1">
                  <span class="status-metro status-active" title="Active">Active</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Halladay</td>
                <td>Aviation Tactical Readiness Officer</td>
                <td data-value="694116650726">30 Dec 1991</td>
                <td data-value="3">
                  <span class="status-metro status-suspended" title="Suspended">Suspended</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>
                  Woldt
                </td>
                <td>
                  Business Services Sales Representative
                </td>
                <td data-value="561440464855">17 Oct 1987</td>
                <td data-value="2">
                  <span class="status-metro status-disabled" title="Disabled">Disabled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Mcgaughy</td>
                <td>Hemodialysis Technician</td>
                <td data-value="437400551390">11 Nov 1983</td>
                <td data-value="2">
                  <span class="status-metro status-disabled" title="Disabled">Disabled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>
                  Goodlow
                </td>
                <td>Technical Services Librarian</td>
                <td data-value="-257733999319">1 Nov 1961</td>
                <td data-value="3">
                  <span class="status-metro status-suspended" title="Suspended">Suspended</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Badgett</td>
                <td>Electrical Lineworker</td>
                <td data-value="362134712000">23 Jun 1981</td>
                <td data-value="1">
                  <span class="status-metro status-active" title="Active">Active</span>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary openDetail">明細</button>
                </td>
                <td>Hyland</td>
                <td>Blackjack Supervisor</td>
                <td data-value="500874333932">15 Nov 1985</td>
                <td data-value="3">
                  <span class="status-metro status-suspended" title="Suspended">Suspended</span>
                </td>
              </tr>
            </tbody>
            <tfoot class="hide-if-no-paging">
              <tr>
                <td colspan="5">
                  <div class="pagination pagination-centered"></div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import 'footable/dist/footable.all.min'
export default {
  name: 'footable',
  created () {
    $(function () {
      var dataTableStr = '#dataTable'

      $(dataTableStr).footable()

      $('.toggle').click(function () {
        $('.toggle').toggle()
        $(dataTableStr).trigger($(this).data('trigger')).trigger('footable_redraw')
      })

      $('table.intercept').bind({
        'footable_sorting': function (e) {
          // return confirm('Do you want to sort by column: ' + e.column.name + ', direction: ' + e.direction);
        },
        'footable_filtering': function (e) {
          if (e.clear) {
            // return confirm('Do you want to clear the filter?');
          } else {
            // return confirm('Do you want to filter by ' + e.filter);
          }
        },

        'footable_paging': function (e) {

          // GetListToPage(e, self);
          // return confirm('Do you want to goto page: ' + e.page);
        }
      })
    })
    $(function () {
      $(document).on('click', '.openDetail', function () {
        var self = this
        self.previousElementSibling.click()
      })
    })
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    aaaFunction () {
      return ''
    }
  }
}
</script>
<style lang="css">
.pagination-centered {
  justify-content: center;
}

.pagination-centered > ul {
  list-style: none;
  display: -webkit-box;
  display: flex;
}

/* .footable-visible {
        border 0px solid transparent;
    } */

/*.table-bordered td:last-child,*/

.table-bordered {
  border: 0px solid transparent;
}
</style>
