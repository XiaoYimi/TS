// 数据类型定义-function
function funcSum (x:number, y:number) {
  return x + y
}

console.log(funcSum(10, 25))

// 数据类型定义-变量形式(可能有点问题)
// let fsum = (x : number, y : number)

// 数据类型定义- type 别名形式
type tsum = (x : number, y : number) => number;

interface interSum {
  (x: number, y: number): number
}



function funcAdd (...rest: number[]): number
function funcAdd (...rest: string[]): string
function funcAdd (...rest: any): any {
  const firstItem = rest[0];
  if (typeof firstItem === 'number') {
    console.log('重载-数值')
    return rest.reduce((pre: any, cur: any) => pre + cur)
  }
  else if (typeof firstItem === 'string') {
    console.log('重载-字符')
    return rest.join('')
  }
}

console.log(funcAdd(1,2,3,4,5))
console.log(funcAdd('123','486','78','64','45'))