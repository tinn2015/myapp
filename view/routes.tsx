import * as React from 'react'
import { Route } from 'react-router-dom'
import userList from './pages/user/list'
import userDetail from './pages/user/detail'

const routes = (
  <div>
    <Route path='/user/list' component={userList} />
    <Route path='/user/detail' component={userDetail} />
  </div>
)

export default routes
