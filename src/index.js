import './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')
console.log(png)
console.log(div)
div.innerHTML = `
<img src="${png}" alt="">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module)=>{
       const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)