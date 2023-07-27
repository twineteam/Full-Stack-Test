import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import employeesApi, { Employee } from "../network/employeesApi";

const TeamAnalytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      const response = await employeesApi.fetchEmployees();
      setEmployees(response.data);
      setIsLoading(false);
    };

    getEmployees();
  }, []);

  return (
    <div style={{ minWidth: 400 }}>
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Employees
      </Typography.Title>

      <Table
        rowKey={(employee) => employee.id}
        dataSource={employees}
        loading={isLoading}
        columns={[
          {
            title: "Full Name",
            render: (employee: Employee) =>
              `${employee.firstName} ${employee.lastName}`,
          },
          {
            title: "Department",
            dataIndex: "department",
          },
          {
            title: "Divsion",
            dataIndex: "division",
          },
        ]}
        pagination={{
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default TeamAnalytics;
