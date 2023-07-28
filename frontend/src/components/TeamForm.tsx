import { Button, Card, Input, Select, Space, Typography } from "antd";
import React, { useState } from "react";

const TeamForm = () => {
  const [division, setDivision] = useState("");

  return (
    <>
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Feedback form
      </Typography.Title>
      <Card
        bodyStyle={{ padding: 24, backgroundColor: "white", borderRadius: 6 }}
      >
        <Space direction="vertical" size={12}>
          <Space direction="vertical" size={4}>
            <Typography.Text>Division</Typography.Text>
            <Select
              options={[]}
              defaultValue={division}
              onChange={(nextDevision) => setDivision(nextDevision)}
            />
          </Space>

          <Select disabled />
          <Input.TextArea disabled />
          <Button disabled />
        </Space>
      </Card>
    </>
  );
};

export default TeamForm;
