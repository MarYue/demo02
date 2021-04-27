// 存储仓库的管理模块。一定要和仓库一起创建出来，然后在仓库中（index.js）进行引用
const defaultState = {  // 默认数据
  inputValue: '写点儿啥。。',
  list: [
    '早上八点起床，洗漱',
    '中午吃完饭回家睡觉'
  ]
} 
export default function variable (state = defaultState, action) {  // 就是一个方法函数
  // state: 是整个项目中需要管理的数据信息，没什么数据的时候用空对象表示
  // state - 原始仓库里的状态
  // action - action新传递的状态
  // console.log(state, action)
  // 先判断type是否正确，正确的话需要声明一个新变量（因为 reducer 里只能接收 state，不能改变 state），然后再 return 回去
  if (action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'add_item') {  // 根据 type 值编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  // push 新内容到列表中
    newState.inputValue = ''
    console.log(newState)
    return newState  // 不要忘记返回！！
  }
  if(action.type === 'delete_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}