<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <button type="button" class="btn btn-primary" @click="sweetalert2Click">基本款</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click2">標頭在下</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click3">Icon、content、footer</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click4">圖片</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click5">自定義按鈕，右上角關閉按鈕</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click6">success(多種切換)</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click7">添加動畫</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click8">confirmBox</button>

      </div>
      <div class="col-12">
        <button type="button" class="btn btn-primary" @click="sweetalert2Click9">按下確認或取消後，在另跳第二視窗顯示訊息</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click10">圖片在上方</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click11">改彈跳視窗背景、彈跳視窗外框背景</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click12">5秒後自動關閉</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click13">多國語言</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click14">input in content</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click15">進度條</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click16">Ajax 範例</button>
      </div>
      <div class="col-12">
        <h2>進階操作，Input 應用</h2>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click17">text</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click18">email</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click19">select </button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click20">radio(demo 非同步取得後端資料)</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click21">checkbox(會驗證是否有勾選)</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click22">file(上傳成功後，會利用跳窗顯示相片)</button>
        <button type="button" class="btn btn-primary" @click="sweetalert2Click23">mutli text</button>

      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2/dist/sweetalert2.min.js'
export default {
  name: 'sweetalert2',
  created () { },
  mounted () { },
  methods: {

    sweetalert2Click () {
      swal('Any fool can use a computer')
    },

    sweetalert2Click2 () {
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    },

    sweetalert2Click3 () {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    },

    sweetalert2Click4 () {
      swal({
        imageUrl: 'http://fakeimg.pl/200x200/',
        imageHeight: 1512,
        imageAlt: 'A tall image'
      })
    },

    sweetalert2Click5 () {
      swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    },

    sweetalert2Click6 () {
      var type = 'success'
      var selectType = 7
      switch (selectType) {
        case 1:
          type = 'error'
          break
        case 2:
          type = 'warning'
          break
        case 3:
          type = 'info'
          break
        case 4:
          type = 'question'
          break
        default:
          type = 'success'
          break
      }

      swal({
        position: 'center',
        type: type,
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },

    sweetalert2Click7 () {
      swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
      })
    },

    sweetalert2Click8 () {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },

    sweetalert2Click9 () {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    },

    sweetalert2Click10 () {
      swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    },

    sweetalert2Click11 () {
      swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        background: '#fff url(http://fakeimg.pl/350x350/)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    center left
    no-repeat
  `
      })
    },

    sweetalert2Click12 () {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 5 seconds.',
        timer: 5000,
        onOpen: () => {
          swal.showLoading()
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    },

    sweetalert2Click13 () {
      swal({
        title: 'هل تريد الاستمرار؟',
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true,
        target: document.getElementById('rtl-container')
      })
    },

    sweetalert2Click14 () {
      swal({
        title: 'Submit your Github username',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => response.json())
            .catch(error => {
              swal.showValidationError(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        if (result.value) {
          swal({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
    },

    sweetalert2Click15 () {
      swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
      ]).then((result) => {
        if (result.value) {
          swal({
            title: 'All done!',
            html:
              'Your answers: <pre>' +
              JSON.stringify(result.value) +
              '</pre>',
            confirmButtonText: 'Lovely!'
          })
        }
      })
    },

    sweetalert2Click16 () {
      const ipAPI = 'https://api.ipify.org?format=json'

      swal.queue([{
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text:
          'Your public IP will be received ' +
          'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return fetch(ipAPI)
            .then(response => response.json())
            .then(data => swal.insertQueueStep(data.ip))
            .catch(() => {
              swal.insertQueueStep({
                type: 'error',
                title: 'Unable to get your public IP'
              })
            })
        }
      }])
    },

    async sweetalert2Click17 () {
      const { value: name } = await swal({
        title: 'What is your name?',
        input: 'text',
        inputPlaceholder: 'Enter your name or nickname',
        showCancelButton: true,
        inputValidator: (value) => {
          return !value && 'You need to write something!'
        }
      })

      if (name) {
        swal({ type: 'success', title: 'Hi, ' + name })
      }
    },

    async sweetalert2Click18 () {
      const { value: email } = await swal({
        title: 'Input email address',
        input: 'email',
        inputPlaceholder: 'Enter your email address'
      })

      if (email) {
        swal('Entered email: ' + email)
      }
    },

    async sweetalert2Click19 () {
      const { value: country } = await swal({
        title: 'Select Ukraine',
        input: 'select',
        inputOptions: {
          'SRB': 'Serbia',
          'UKR': 'Ukraine',
          'HRV': 'Croatia'
        },
        inputPlaceholder: 'Select country',
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === 'UKR') {
              resolve()
            } else {
              resolve('You need to select Ukraine :)')
            }
          })
        }
      })

      if (country) {
        swal('You selected: ' + country)
      }
    },

    async sweetalert2Click20 () {
      // inputOptions can be an object or Promise
      var inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            '#ff0000': 'Red',
            '#00ff00': 'Green',
            '#0000ff': 'Blue'
          })
        }, 2000)
      })

      const { value: color } = await swal({
        title: 'Select color',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          return !value && 'You need to choose something!'
        }
      })

      if (color) {
        swal({ html: 'You selected: ' + result })
      }
    },

    async sweetalert2Click21 () {
      const { value: accept } = await swal({
        title: 'Terms and conditions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
          'I agree with the terms and conditions',
        confirmButtonText:
          'Continue <i class="fa fa-arrow-right></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree with T&C'
        }
      })

      if (accept) {
        swal('You agreed with T&C :)')
      }
    },

    async sweetalert2Click22 () {
      const { value: file } = await swal({
        title: 'Select image',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })

      if (file) {
        var reader = new FileReader()
        reader.onload = (e) => {
          swal({
            title: 'Your uploaded picture',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture'
          })
        }
        reader.readAsDataURL(file)
      }
    },

    async sweetalert2Click23 () {
      const { value: formValues } = await swal({
        title: 'Multiple inputs',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        swal(JSON.stringify(formValues))
      }
    }

  }
}
</script>
<style lang="css">
@import 'sweetalert2/dist/sweetalert2.min.css';
</style>
 