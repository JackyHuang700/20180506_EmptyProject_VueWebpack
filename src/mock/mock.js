import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import 'jquery-mockjax/src/jquery.mockjax.js'
// import 'jquery-mockjax'

import { select2List } from './data/select2List'
import { dataTableList } from './data/dataTableList'

import {
  apiSelect2Select24GetAll,
  apiDataTableDataTableGetAll
} from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)

    mock.onGet(apiSelect2Select24GetAll).reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var { queryStr, pageNo } = config.params

          var newList = pagination(select2List, queryStr, pageNo)

          resolve([
            200,
            {
              select2List: newList
            }
          ])
        }, 500)
      })
    })
  },

  // jquery mock
  init_jquery () {
    // select2
    $.mockjax({
      type: 'GET',
      url: apiSelect2Select24GetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        var { queryStr, pageNo } = settings.data

        var items = pagination(select2List, queryStr, pageNo || 1)
        for (var i in items[0]) {
          items[0][i]['loading'] = false
        }

        // 回應
        this.responseText = {
          items: items,
          total_count: select2List.length
        }
      }
    })

    // dataTable
    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (settings) {
        console.info('settings: ', settings)
        var { draw, start, length } = settings.data
        var { value, regex } = settings.data.search

        console.log('start', start)
        console.log('length', length)

        // copy new data
        var newDataTableList = JSON.parse(JSON.stringify(dataTableList))
        // console.log('dataTableList', newDataTableList)
        newDataTableList.draw = draw
        newDataTableList.data = paginationToDataTable(
          newDataTableList.data,
          value || '',
          start || 0,
          length || 10
        )
        // console.log('dataTableList2', newDataTableList)
        // 回應
        this.responseText = newDataTableList
      }
    })
  }
}

// pageNo 當前頁數
function pagination (array, queryStr, pageNo) {
  // 計算分頁資料
  let newList = []
  var pageSize = 10
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  newList.push(
    offset + pageSize >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageSize)
  )
  return newList
}

// pageNo 當前頁數
function paginationToDataTable (array, queryStr, pageNo, pageSize) {
  // 計算分頁資料
  let newList = []
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  var newItems = array.slice(pageNo, (pageNo + pageSize))

  for (var i in newItems) {
    newList.push(newItems[i])
  }

  return newList
}
