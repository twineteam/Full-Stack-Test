import { AxiosResponse } from "axios";
import baseApi from ".";

export interface DataIssue {
  dataIssue: string;
  number: number;
}
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  division: string;
}

const fetchDataIssues = async (): Promise<AxiosResponse<DataIssue[]>> => {
  const dataIssues = await baseApi.get<DataIssue[]>(`v1/employees/data-issues`);
  return dataIssues;
};

const fetchEmployees = async (): Promise<AxiosResponse<Employee[]>> => {
  const employees = await baseApi.get<Employee[]>(`v1/employees/`);
  return employees;
};

export default {
  fetchDataIssues,
  fetchEmployees,
};
