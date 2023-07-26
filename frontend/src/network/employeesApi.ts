import { AxiosResponse } from "axios";
import baseApi from ".";

export interface DataIssue {
  dataIssue: string;
  number: number;
}

const fetchDataIssues = async (): Promise<AxiosResponse<DataIssue[]>> => {
  const dataIssues = await baseApi.get<DataIssue[]>(`v1/employees/data-issues`);
  return dataIssues;
};

export default {
  fetchDataIssues,
};
