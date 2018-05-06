<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <form method="get" class="cmxform" id="form1" action="">
          <fieldset>
            <legend>登录框</legend>
            <p>
              <label for="user">用户名</label>
              <input id="user" name="user" required minlength="3">
            </p>
            <p>
              <label for="password">密码</label>
              <input id="password" type="password" maxlength="12" name="password" required minlength="5">
            </p>
            <p>
              <input class="submit" type="submit" value="Login">
            </p>
          </fieldset>
        </form>

      </div>
    </div>
  </div>
</template>
<script>
import 'jquery-validation'
export default {
  name: 'jqueryvalidation4',
  created () { },
  mounted () {
    // 新增自訂的校驗規則
    $.validator.addMethod('alphabetnumber', function (value, element) {
      var re = /^[a-zA-Z0-9]+$/g

      return value.match(re)
    })

    // 提交时验证表单
    var validator = $('#form1').validate({
      errorPlacement: function (error, element) {
        // Append error within linked label
        $(element)
          .closest('form')
          .find("label[for='" + element.attr('id') + "']")
          .append(error)
      },
      errorElement: 'span',
      rules: {
        password: {
          required: true,
          minlength: 4,
          maxlength: 20,
          alphabetnumber: true
        }
      },
      messages: {
        user: {
          required: ' (必需字段)',
          minlength: ' (不能少于 3 个字母)'
        },
        password: {
          required: '請輸入您的密碼.',
          minlength: '密碼不能小於4字元.',
          maxlength: '密碼不能長於20字元',
          alphabetnumber: '只能輸入英文與數字'
        }
      }
    })

    $('.cancel').click(function () {
      validator.resetForm()
    })
  }
}
</script>
