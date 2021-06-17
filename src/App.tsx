import React, { FC } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Typography, Layout } from "antd";

import { ForToday } from "./components";

const queryClient = new QueryClient();
// import { store } from "./redux";

const { Title } = Typography;
const { Content, Header, Footer, Sider } = Layout;

const App: FC = () => (
  // <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Sider className="sider">Sider</Sider>
      <Layout>
        <Header className="header">
          <Title> Scriptum Deus </Title>
        </Header>
        <Content style={{ textAlign: "center", width: "90%" }}>
          <ForToday></ForToday>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </QueryClientProvider>

  // </Provider>
);

export default App;
