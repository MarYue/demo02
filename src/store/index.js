import { createStore } from 'redux' // 引入 createStore 方法
import reducer from './reducer'
const store = createStore(reducer) // 创建数据存储仓库
export default store  // 暴露出去
