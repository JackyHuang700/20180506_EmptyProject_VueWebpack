<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary" @click="iziToastClick">default</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick2">Show</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick3">Info</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick4">Success</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick5">Warning</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick6">Error</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick7">Question</button>
        <button type="button" class="btn btn-primary" @click="iziToastClick8">Inputs</button>
        <button type="button" class="btn btn-danger" @click="iziToastDestroy">清除所有吐司</button>
      </div>
    </div>
  </div>
</template>

<script>
import iziToast from 'izitoast/dist/js/iziToast.min.js'
export default {
  name: 'izitoast',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

    iziToastClick () {
      iziToast.show({
        position: 'topRight',
        title: 'Hey',
        message: 'What would you like to add?'
      })
    },

    iziToastClick2 () {
      iziToast.show({
        theme: 'dark',
        icon: 'icon-person',
        title: 'Hey',
        message: 'Welcome!',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
          ['<button>Ok</button>', function (instance, toast) {
            alert('Hello world!')
          }, true], // true to focus
          ['<button>Close</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
              onClosing: function (instance, toast, closedBy) {
                console.info('closedBy: ' + closedBy) // The return will be: 'closedBy: buttonName'
              }
            }, toast, 'buttonName')
          }]
        ],
        onOpening: function (instance, toast) {
          console.info('callback abriu!')
        },
        onClosing: function (instance, toast, closedBy) {
          console.info('closedBy: ' + closedBy) // tells if it was closed by 'drag' or 'button'
        }
      })
    },

    iziToastClick3 () {
      iziToast.info({
        position: 'topRight',
        title: 'Hello',
        message: 'Welcome!'
      })
    },

    iziToastClick4 () {
      iziToast.success({
        position: 'topRight',
        title: 'OK',
        message: 'Successfully inserted record!'
      })
    },

    iziToastClick5 () {
      iziToast.warning({
        position: 'topRight',
        title: 'Caution',
        message: 'You forgot important data'
      })
    },

    iziToastClick6 () {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Illegal operation'
      })
    },

    iziToastClick7 () {
      iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        toastOnce: true,
        id: 'question',
        zindex: 999,
        title: 'Hey',
        message: 'Are you sure about that?',
        position: 'center',
        buttons: [
          ['<button><b>YES</b></button>', function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          }, true],
          ['<button>NO</button>', function (instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          }]
        ],
        onClosing: function (instance, toast, closedBy) {
          console.info('Closing | closedBy: ' + closedBy)
        },
        onClosed: function (instance, toast, closedBy) {
          console.info('Closed | closedBy: ' + closedBy)
        }
      })
    },

    iziToastClick8 () {
      iziToast.info({
        timeout: 20000,
        overlay: true,
        toastOnce: true,
        id: 'inputs',
        zindex: 999,
        title: 'Inputs',
        message: 'Examples',
        position: 'center',
        drag: false,
        inputs: [
          ['<input type="checkbox">', 'change', function (instance, toast, input, e) {
            console.info(input.checked)
          }],
          ['<input type="text">', 'keyup', function (instance, toast, input, e) {
            console.info(input.value)
          }, true],
          ['<input type="number">', 'keydown', function (instance, toast, input, e) {
            console.info(input.value)
          }]
        ]
      })
    },

    iziToastDestroy () {
      iziToast.destroy()
    }

  }

}
</script>

<style>
@import 'izitoast/dist/css/iziToast.min.css';
</style>