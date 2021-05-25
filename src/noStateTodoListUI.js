// 使用无状态组件可以提高性能
// 1. 不需要引入 Component
// 2. 写一个 TodoListUI 函数，传递一个 props 参数，修改里面所有的props，去掉this
 import React from 'react'
 import 'antd/dist/antd.css'
 import { Input, Button, List } from 'antd'

 const NoStateTodoListUI = (props) => {
   return (
     <div>
       <div>
         <Input 
           placeholder={props.inputValue} 
           style={{width: '200px', margin:'10px 10px'}} 
           // 替换父组件传递过来的属性
           onChange={props.changeInputValue} />
         <Button onClick={props.handleClick} type="primary">增加</Button>
       </div>
       <div>
         <List 
           // 引入store中的数据
           dataSource={props.list} 
           renderItem={(item, index) => (
             // 这里的删除功能也要改用箭头函数的方式，在箭头函数里使用属性的方法
             // 下面这是错误写法，如果倒序删除有问题，index出现了重新声明的问题
           // <List.Item style={{paddingLeft: '20px'}} onClick={(index) => {this.props.deleteItem(index)}}>{item}</List.Item>
           <List.Item style={{paddingLeft: '20px'}} onClick={() => {props.deleteItem(index)}}>{item}</List.Item>
         )} />
       </div>
     </div>
   )
 }

 export default NoStateTodoListUI