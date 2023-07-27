import { Card, Col, Row, Spin, Statistic, Typography } from "antd";
import React, { useEffect, useState } from "react";
import employeesApi, { DataIssue } from "../network/employeesApi";
import analytics from "../utils/analytics";

const DataIssues = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataIssues, setDataIssues] = useState<DataIssue[]>([]);

  useEffect(() => {
    const getDataIssues = async () => {
      setIsLoading(true);
      const response = await employeesApi.fetchDataIssues();
      analytics.capture(response.data);
      setDataIssues(response.data);
      setIsLoading(false);
    };

    getDataIssues();
  }, []);

  return (
    <div style={{ minWidth: 400 }}>
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Data Issues
      </Typography.Title>

      <Row gutter={[24, 24]}>
        {isLoading && dataIssues.length > 0 ? (
          <Spin />
        ) : (
          <>
            <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title={dataIssues[0]?.dataIssue}
                  value={dataIssues[0]?.number}
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default DataIssues;
