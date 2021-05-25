import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
  // state = {  }
  render() { 
    return ( 
      <div>
        <div>
          <Input 
            placeholder={this.props.inputValue} 
            style={{width: '200px', margin:'10px 10px'}} 
            // 替换父组件传递过来的属性
            onChange={this.props.changeInputValue} />
          <Button onClick={this.props.handleClick} type="primary">增加</Button>
        </div>
        <div>
          <List 
            // 引入store中的数据
            dataSource={this.props.list} 
            renderItem={(item, index) => (
              // 这里的删除功能也要改用箭头函数的方式，在箭头函数里使用属性的方法
              // 下面这是错误写法，如果倒序删除有问题，index出现了重新声明的问题
            // <List.Item style={{paddingLeft: '20px'}} onClick={(index) => {this.props.deleteItem(index)}}>{item}</List.Item>
            <List.Item style={{paddingLeft: '20px'}} onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>
          )} />
        </div>
      </div>
     )
  }
}
 
export default TodoListUI