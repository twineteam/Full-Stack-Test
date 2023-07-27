import { Button, Card, Input, Select, Space, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import employeesApi, { Employee } from "../network/employeesApi";

const TeamForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [division, setDivision] = useState("");

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      const response = await employeesApi.fetchEmployees();
      setEmployees(response.data);
      setIsLoading(false);
    };

    getEmployees();
  }, []);

  if (isLoading) return <Spin />;

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
