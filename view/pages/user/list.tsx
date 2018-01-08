import React, { Component } from 'react';
import  { connect } from 'redux-zero-x'
import { Button } from 'antd'


@connect(['counterStore'])
class UserList extends Component <any, any> {

  render() {
    return (
      <div>
        user list { this.props.count }
        test pull request
        {/* { this.props.random } */}
        <Button type="primary" onClick={this.props.increment} >increase</Button>
        <Button type="primary" onClick={this.props.decrement}>decrease</Button>
        {/* <Button type="primary" onClick={this.props.getRandom}>decrease</Button> */}
      </div>
    );
  }
}


export default UserList;
