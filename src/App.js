import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import ListOfUsers from './List'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div style={{ color: '#fff', fontSize: '2em' }}>Queue</div>
        </Header>
        <Content style={{ padding: ' 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: '68vh' }}>
            <ListOfUsers />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          WhereIsInput 2.0 ©2018
        </Footer>
      </Layout>
    );
  }
}

export default App;
