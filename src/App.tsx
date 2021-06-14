import React, { FC } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Typography, Layout } from "antd";

import { store } from "./redux";

const { Title } = Typography;
const { Content, Header, Footer, Sider } = Layout;

const App: FC = () => (
  <Provider store={store}>
    <Layout>
      <Sider className="sider">Sider</Sider>
      <Layout>
        <Header className="header">
          <Title> Scriptum Deus </Title>
        </Header>
        <Content style={{ textAlign: "center" }}>
          <Title>Hello World!</Title>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Provider>
);

export default App;
