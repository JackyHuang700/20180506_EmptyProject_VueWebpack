import axios from 'axios'

// select2
export const apiSelect2Select24GetAll = '/api/Select2/Select24GetAll'

export const methodGetSelect2Select24GetAll = params => {
  return axios.get(apiSelect2Select24GetAll, {
    params: params
  })
}

// dataTable
export const apiDataTableDataTableGetAll = '/api/DataTable/DataTableGetAll'

export const methodGetDataTableDataTableGetAll = params => {
  return axios.get(apiDataTableDataTableGetAll, {
    params: params
  })
}
