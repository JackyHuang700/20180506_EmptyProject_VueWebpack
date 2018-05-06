<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <form class="cmxform" id="commentForm2" method="get" action="">
          <fieldset>
            <legend>输入您的名字，邮箱，URL，备注。</legend>
            <p>
              <label for="cname">Name (必需, 最小两个字母)</label>
              <input id="cname" name="name" minlength="2" type="text" value="asofjoadf" required>
            </p>
            <p>
              <label for="cemail">E-Mail (必需)</label>
              <input id="cemail" type="email" name="email" value="as@gma" required>
            </p>
            <p>
              <label for="curl">URL (可选)</label>
              <input id="curl" type="url" name="url" value="http://www.runoob.com/">
            </p>
            <p>
              <label for="ccomment">备注 (必需)</label>
              <textarea id="ccomment" name="comment" required>12312</textarea>
            </p>
            <p>
              <input class="submit" type="submit" value="Submit">
              <input class="submit" type="button" value="Reset" id="reset">
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
  name: 'jqueryvalidation',
  created () {

  },
  mounted () {
    // $.validator.setDefaults({
    //   submitHandler: function (form) {
    //     alert('提交事件!')
    //     form.submit();
    //   }
    // })
    // type 1
    var validator = $('#commentForm2').validate({
      submitHandler: function (form) {
        alert('提交事件!')
        form.submit()
      }
    })
    // type 2
    // $('#commentForm2').validate({
    //   debug: true // debug，只验证不提交表单
    // })

    // reset
    $('#reset').click(function () {
      validator.resetForm()
    })
  }
}
</script>
<style lang="css" scoped>

</style>
