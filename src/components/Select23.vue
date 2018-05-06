<template>
  <div class="container">
    <div class="row">
      <div class="row">

        <select id="sel_menu" class="js-example-templating js-states form-control">
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
  name: 'select23',
  created () { },
  mounted () {
    // 带图片
    $('#sel_menu').select2({
      templateResult: formatState,
      templateSelection: formatState
    })

    function formatState (state) {
      if (!state.id) { return state.text }
      // 系統圖案
      // var $state = $(
      //   '<span><img src="/content/images/' + state.element.value.toLowerCase() + '.ico" class="img-flag" /> ' + state.text + '</span>'
      // )
      // 假圖片
      var $state = $(
        '<span><img src="http://fakeimg.pl/20x20/" class="img-flag" /> ' + state.text + '</span>'
      )
      return $state
    };
  },
  methods: {}
}
</script>

<style lang="css">

</style>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>
