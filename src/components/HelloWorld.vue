<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 mb-4">
        <div class="card">
          <div class="card-header">
            <h2 class="text-left pl-2 mb-0">快速鍵</h2>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0 float-left">
              <button type="button" class="fastKey btn btn-primary">持有訂單</button>
              <button type="button" class="fastKey btn btn-primary">已審訂單</button>
              <button type="button" class="fastKey btn btn-primary">所有訂單</button>
              <!-- <button type="button" class="fastKey btn btn-secondary">Secondary</button> -->
              <!-- <button type="button" class="fastKey btn btn-success">Success</button> -->
              <!-- <button type="button" class="fastKey btn btn-danger">Danger</button> -->
              <button type="button" class="btn btn-warning advanSearch">英語組</button>
              <button type="button" class="btn btn-warning advanSearch">日文組</button>
            </blockquote>
          </div>
        </div>
      </div>

      <!-- 開闔式窗 -->
      <div class="col-sm-12">
        <!-- <section class="mb-4 text-left">
          <p>
            <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              進階查詢
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">

              <div class="col-sm-12 mb-2">
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="inputText">Email</label>
                    <input type="text" class="form-control" id="inputText" placeholder="Email">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputText2">Password</label>
                    <input type="text" class="form-control" id="inputText2" placeholder="Password">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputText3">Password</label>
                    <input type="text" class="form-control" id="inputText3" placeholder="Password">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputText4">Password</label>
                    <input type="text" class="form-control" id="inputText4" placeholder="Password">
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <button type="button" class="btn btn-primary">查詢</button>
                <button type="button" class="btn btn-danger">重置</button>
              </div>
            </div>
          </div>
        </section> -->

        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="float-left mb-0">
                查詢條件:
                <b id="searchState">英文組</b>
              </h2>
              <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>三</b>
              </button>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <div class="form-group row">

                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText">Email</label>
                        <input type="text" class="form-control" id="inputText" placeholder="Email">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">Password</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="Password">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText3">Password</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="Password">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText4">Password</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="Password">
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText5">Email</label>
                        <input type="text" class="form-control" id="inputText5" placeholder="Email">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText6">Password</label>
                        <input type="text" class="form-control" id="inputText6" placeholder="Password">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputState">State</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText8">Password</label>
                        <input type="text" class="form-control" id="inputText8" placeholder="Password">
                      </div>
                    </div>
                  </div>

                  <label for="searchInput" class="col-sm-1 col-form-label pr-0 text-left">專案編號:</label>
                  <div class="col-sm-11">
                    <input type="text" class="form-control" id="searchInput" placeholder="searchInput">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted () {
    // var classname = document.getElementsByClassName('fastKey')
    // console.log(classname)
    // for (var i = 0; i < classname.length; i++) {
    //   console.log(classname[i])
    //   classname[i].addEventListener('click', fastKeyFunc, false)
    // }

    // // auto click
    // // // var b = document.getElementsByClassName('fastKey')
    // // b[0].click()

    // (function () {
    //   // auto click

    // }())

    $(document).on('click', '.fastKey', fastKeyFunc)
    $(document).on('click', '.advanSearch', advanSearchFunc)

    function fastKeyFunc (e) {
      document.getElementById('searchInput').value = '1223'

      // 重新觸發Table
    }

    function advanSearchFunc (e) {
      console.log(e.target.innerText)
      document.getElementById('searchState').innerHTML = e.target.innerText
    }

    // auto click
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>