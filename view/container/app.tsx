import React, { Component } from 'react';
import { Provider } from 'redux-zero-x'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import MENULIST from '../util/config' 
import routes from '../routes'
import store from '../store'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  /** 获取菜单列表 */
  getMenuList = () => {
    const getMenu = (menu) => {
      if (menu.children) {
        return (
          <SubMenu
            key={menu.id}
            title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}
          >
            {menu.children.map(child => getMenu(child))}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={menu.id}>
          <Link to={menu.url}><Icon type={menu.icon} /><span>{menu.name}</span></Link>
        </Menu.Item>
      )
    }
    return MENULIST.map(item => getMenu(item))
  }

  render() {
    return (
      <Provider {...store}>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {this.getMenuList()}
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {routes}
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                welcome to please 
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
