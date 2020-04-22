import Vue from 'vue'
import Component from 'vue-class-component'
import ComponentBase from './ComponentBase'

@Component({
  template: require('./MyComponent.html') //html-loaderを使うと外部のhtmlファイルを読み込める
})
export default class MyComponent extends ComponentBase {
  // data
  hoge: string = 'Hello'

  // methods
  onClick() {
    this.hoge = 'Goodbye'
  }
}