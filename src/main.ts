// 引入样式
import './style/index.less'

// 定义食物类的Food

class Food {
  element: HTMLElement;
  constructor () {
    // ! 感叹号表示一定不会为空
    // 获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }
  // 获取食物 x 坐标的方法
  get X () {
    return this.element.offsetLeft;
  }
  // 获取食物 Y 坐标的方法
  get Y () {
    return this.element.offsetTop;  
  }

  // 修改食物的位置
  change () {
    this.element.style.left = 
    this.element.style.top = 
  }
}