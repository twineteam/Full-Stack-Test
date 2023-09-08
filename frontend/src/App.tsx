import React, { useState } from "react";
import { Layout, Select, Space, Typography } from "antd";
import DataIssues from "./components/DataIssues";
import TeamAnalytics from "./components/TeamAnalytics";
import TeamForm from "./components/TeamForm";

const { Header, Content, Footer } = Layout;

const userOptions = [
  {
    value: "Full Access User",
    label: "Full Access User",
  },
  {
    value: "Field restricted User",
    label: "Field restricted User",
    hiddenDivisions: ["Sales", "Marketing"],
  },
];

const App = () => {
  const [user, setUser] = useState(userOptions[0]);
  return (
    <Layout style={{ height: "100%" }}>
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
                <Typography.Title level={3} style={{ marginBottom: 24 }}>
                  User
                </Typography.Title>
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

              <section>
                <TeamForm />
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
