// TS 类型检测机制

// 基础类型推断 (初始化)
let a = 1; // 类型推断 number
let b = 'afgae' // 类型推断 string
let c = null // 类型推断 null
let d = [] // 类型推断 any[]

let e = (x = 3) => x // 类型推断 number
let f = (s = '') => s + 'efg' // 类型推断 string

// 通用类型推断
let g = [123, null] // 类型推断 number | null

// 上下文类型推断
// window.onkeyup = (event) => {
//   console.log(event.myattr) // event 为 keybord 类型,没有 myattr 属性
// }