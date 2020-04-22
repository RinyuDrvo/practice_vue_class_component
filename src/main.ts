import Vue from 'vue'
import MyComponent from './component/MyComponent'

window.onload = () => {
  new Vue({
    el: '#app',
    components: {
      MyComponent
    }
  })
}