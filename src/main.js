// import './hot'

// // if (module.hot) {
// //   module.hot.accept()
// // }
// document.write('dev-server-demo')

// // document.write('hello world')
// const div = document.createElement('div')
// document.body.appendChild(div)
// if (module.hot) {
//   module.hot.accept('./hot.js', function() {
//     console.log('现在在更新 hot 模块了~');
//     div.innerHTML = hello()
//   })
// }

import './css/hot.css'
import { hot } from './hot.js'
const div = document.createElement('div')
div.innerHTML = hot()
document.body.appendChild(div)

console.log(module.hot)
if (module.hot) {
  console.warn('待触发')
  module.hot.accept('./hot.js', function() {
    console.log('现在在更新 hot 模块了~')
    div.innerHTML = hot()
  })
}

ajax('get', '/blog/')
ajax('get', '/project/')

function ajax(method, url) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status === 200) {
        alert('success')
      } else {
        alert(this.responseText)
      }
    }
  }
  xhr.send()
}