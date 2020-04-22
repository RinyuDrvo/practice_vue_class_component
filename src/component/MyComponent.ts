import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: require('./MyComponent.html') //html-loaderを使うと外部のhtmlファイルを読み込める
})
export default class MyComponent extends Vue {
  // data
  hoge: string = 'Hello'

  // methods
  onClick() {
    this.hoge = 'Goodbye'
  }
}