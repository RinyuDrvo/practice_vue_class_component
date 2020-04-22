import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ComponentBase extends Vue {
  mounted() {
    console.log('mounted')
  }
}