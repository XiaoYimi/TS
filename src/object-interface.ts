// 假设后端返回结果的数据结构是这样的 
let result = {
  data: [
    { id: 1, name: 'xiaoyimi' },
    { id: 2, name: 'muchenfeng' }
  ]
}

interface List {
  id: number,
  name: string,
  [x:string]: any // 字符串索引牵引
}

interface Result {
  data: List[]
}

function output (result : Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name, item.age)
  })
}

output(result)

