import { Card, Col, Row, Spin, Statistic, Typography } from "antd";
import React, { useEffect, useState } from "react";
import employeesApi, { DataIssue } from "../network/employeesApi";

const DataIssues = () => {
  const [isLoading, setIsLoading] = useState(false);
  // ~~~~~~~~ INTERVIEWER NOTES ~~~~~~~~
  // Great: Recognize that this is a network state.
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [dataIssues, setDataIssues] = useState<DataIssue[]>([]);

  // TODO: Refactor to a hook
  useEffect(() => {
    const getDataIssues = async () => {
      setIsLoading(true);
      const response = await employeesApi.fetchDataIssues();
      setDataIssues(response.data);
      setIsLoading(false);
    };

    getDataIssues();
  }, []);

  return (
    <div style={{ minWidth: 400 }}>
      {/* TODO: Make sticky */}
      <Typography.Title level={3} style={{ marginBottom: 24 }}>
        Data Issues
      </Typography.Title>

      <Row>
        {isLoading ? (
          <Spin />
        ) : (
          <>
            {dataIssues?.map((dataIssue, index) => (
              <Col span={12} key={index}>
                <Card bordered={false}>
                  <Statistic
                    title={dataIssue.dataIssue}
                    value={`${dataIssue.number}0`}
                  />
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </div>
  );
};

export default DataIssues;
