import React, { Component } from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// import Dashboard from './Dashboard'
import CreateEmploy from './CreateEmploy';
import ListEmp from './ListEmp';
import "./App.css";
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Router>
      
      <div className="App">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="/create-emp" icon={<AreaChartOutlined />}>
                <Link to="/create-emp">Create Emp</Link>
              </Menu.Item>
              <Menu.Item key="/list" icon={<PieChartOutlined />}>
                <Link to="/list">List</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <span className="logout" onClick={this.logout}>
                <LogoutOutlined />
              </span>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                overflow: "auto",
              }}
            >
            <Switch>                  
                  <Route exact path='/' component={CreateEmploy} />
                  <Route exact path='/create-emp:id?' component={CreateEmploy} />
                  <Route exact path='/list' component={ListEmp} />
                </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
