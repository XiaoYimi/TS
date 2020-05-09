function print (val: string): string {
  console.log(val)
  return val
}
print('abc')

// 假如函数 print 可输入字符或字符数组,应怎么实现?
console.log('函数重载')

function Print (val: string): string
function Print (val: string[]): string[]

function Print (val: any): any {
  console.log('重载实现' + val)
  return val
}

Print('123456')

function Print1 (val: string | string[]): string | string[] {
  console.log('联合类型' + val)
  return val
}

Print1(['garet', 'ghrt5'])

function Print2<T> (val: T): T {
  console.log('泛型函数' + val)
  return val
}
Print2(['456', '476gre'])


console.log('函数别名对泛型改写')
type Print3 = <T>(val: T) => T
let myPrint: Print3 = print
myPrint(456)
myPrint([4765,87,56,78])

console.log('接口定义泛型')
interface Print4 {
  <T>(val: T): T
}
let myPrint2: Print4 = print
myPrint2('4645')
myPrint2([453,4563,98,465])




