import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'  // 引入store数据仓库
// import { CHANGE_INPUT_VALIE, DELETE_ITEM, ADD_ITEM } from './store/actionTypes' // 方法封装前的引用
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators' // 方法封装后的引用

// const data = [
//   '下午2点组会',
//   '下午4点验收',
//   '晚上8点回家'
// ]

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 引入store中的数据
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    // 获得 store 中的更新，更新组件
    this.storeChange = this.storeChange.bind(this)  // 转变 this 指向
    this.handleClick = this.handleClick.bind(this)
    // 订阅 redux 的状态
    store.subscribe(this.storeChange)  
  }
  render() { 
    return ( 
      <div>
        <div>
          <Input 
            placeholder={this.state.inputValue} 
            style={{width: '200px', margin:'10px 10px'}} 
            onChange={this.changeInputValue} />
          <Button onClick={this.handleClick} type="primary">增加</Button>
        </div>
        <div>
          <List 
            // 引入store中的数据
            dataSource={this.state.list} 
            renderItem={(item, idx) => (
            <List.Item style={{paddingLeft: '20px'}} onClick={this.deleteItem.bind(this, idx)}>{item}</List.Item>
          )} />
        </div>
      </div>
     )
  }
  changeInputValue(e) {
    // 要改变redux里state的值就要创建action，action是一个对象，一般有两个属性：1.对action的描述 2.要改变的值
    const action = changeInputAction(e.target.value)
    // 创建好的action要通过 dispatch() 方法传递给 store
    store.dispatch(action)
  }
  deleteItem(index) {
    // 创建 action 再 dispatch 给 store
    console.log(index)
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    // 用方法调用的方式
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  storeChange() {
    // 根据 store 状态更新组件
    this.setState(store.getState())
  }
  handleClick() {
    // 创建 action 再 dispatch 给 store
    // const action = {
    //   type: ADD_ITEM
    // }
    // 用方法调用的方式
    const action = addItemAction()
    store.dispatch(action)
  }
}
 
export default TodoList;