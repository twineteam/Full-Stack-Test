import React, { useState } from "react";
import { Layout, Select, Space, Typography } from "antd";
import DataIssues from "./components/DataIssues";
import TeamAnalytics from "./components/TeamAnalytics";

const { Header, Content, Footer } = Layout;

const userOptions = [
  {
    value: "Full Access User",
    label: "Full Access User",
  },
  {
    value: "Field restricted User",
    label: "Field restricted User",
  },
  {
    value: "Population restricted User",
    label: "Population restricted User",
  },
];

const App = () => {
  const [user, setUser] = useState(userOptions[0].value);
  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          background: "linear-gradient(0.25turn, #00D38D, #722ED1)",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 4px",
          marginBottom: 24,
        }}
      >
        <Typography.Title style={{ color: "white" }} level={4}>
          Knoetic
        </Typography.Title>
      </Header>

      <Content style={{ padding: "0 50px", minHeight: 280, margin: "auto" }}>
        <Space direction="vertical" size={48}>
          {user ? (
            <>
              <section>
                <Select
                  defaultValue={user}
                  options={userOptions}
                  onChange={(userValue) => setUser(userValue)}
                />
              </section>

              <section>
                <DataIssues />
              </section>

              <section>
                <TeamAnalytics />
              </section>
            </>
          ) : (
            <section>
              <Select
                defaultValue={user}
                options={userOptions}
                onChange={(userValue) => setUser(userValue)}
              />
            </section>
          )}
        </Space>
      </Content>

      <Footer style={{ textAlign: "center", fontStyle: "italic" }}>
        All the best 😬
      </Footer>
    </Layout>
  );
};

export default App;
