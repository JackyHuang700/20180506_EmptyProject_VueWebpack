<template>
  <div class="container">
    <div class="row">
      <div class="row">

        <select id="sel_menu2" multiple="multiple" class="form-control">
          <optgroup label="系统设置">
            <option value="1">用户管理</option>
            <option value="2">角色管理</option>
            <option value="3">部门管理</option>
            <option value="4">菜单管理</option>
          </optgroup>
          <optgroup label="订单管理">
            <option value="5">订单查询</option>
            <option value="6">订单导入</option>
            <option value="7">订单删除</option>
            <option value="8">订单撤销</option>
          </optgroup>
          <optgroup label="基础数据">
            <option value="9">基础数据维护</option>
          </optgroup>
        </select>

      </div>
    </div>
  </div>
</template>
<script>
import 'select2/dist/js/select2.min.js'
export default {
  name: 'select22',
  created () { },
  mounted () {
    // 多选
    $('#sel_menu2').select2({
      tags: true,
      maximumSelectionLength: 3 // 最多可以選擇的個數
    })
  },
  methods: {}
}
</script>

<style lang="css">

</style>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>
