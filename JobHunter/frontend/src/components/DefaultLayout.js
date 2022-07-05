import { Layout, Menu } from 'antd';
import React from 'react';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  HomeOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import Filter from './Filter';

const { Header, Sider, Content, Footer } = Layout;

class DefaultLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    localStorage.removeItem('user')
    window.location.reload();
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
          style={{ position: 'sticky', height: '100%', top: 0 }} breakpoint={"lg"}

        >
          <div className="logo">
            {this.state.collapsed ? (<h1> JH</h1>) : (<h1> JobHunter</h1>)}
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>

            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <NavLink to='/profile'>Profile</NavLink>
            </Menu.Item>

            <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
              <NavLink to='/appliedjobs'>Applied Jobs</NavLink>
            </Menu.Item>

            <Menu.Item key="/postjob" icon={<PlusOutlined />}>
              <NavLink to='/postjob'>Post Job</NavLink>
            </Menu.Item>

            <Menu.Item key="/posted" icon={<CheckOutlined />}>
              <NavLink to='/posted'>Posted Jobs</NavLink>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link onClick={this.logout}>Logout</Link>
            </Menu.Item>
          </Menu>



        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"
            style={{ padding: 0, position: 'sticky', overflow: 'auto', zIndex: 9999, top: 0 }}>

            <div className='flex justify-content-between'>

              <div>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </div>

              <div>
                <Filter />
              </div>

              <div style={{ display: this.state.collapsed ? 'none' : 'inline' }}>
                <h5 className='mr-2'><b>  <UserOutlined />  {user.username}</b></h5>
              </div>

            </div>


          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Job Hunter ©2022 Created by Kajol Gupta
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;