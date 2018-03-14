import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import ListOfUsers from "./ListOfUsers";
import { Layout, Menu, Breadcrumb, Button } from "antd";
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: "100vh", width: '100vw' }}>
        <Header className="Header" style={{backgroundColor: '#fff'}}>

            <div>Queue</div>
            <Button type="primary" className="logIn">Log in</Button>
        </Header>
        <Content style={{ padding: " 50px", width: '100vw' }}>
          <div style={{ background: "#fff", padding: 24, display: 'flex', justifyContent: 'space-around ' }}>
            <ListOfUsers />
            <ListOfUsers />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>WhereIsInput 2.0 ©2018</Footer>
      </Layout>
    );
  }
}

export default App;
