import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/employee.interface';
import { EmployeeHelpers } from './employees.helper';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeeHelpers: EmployeeHelpers) {}

  findAll(): Employee[] {
    return this.employeeHelpers.getEmployees();
  }

  findActiveDataIssues(): Employee[] {
    const employeesAndCandidate =
      this.employeeHelpers.getAllMatchedEmployeesWithCandidate();
    const employeesWithoutCandidate = employeesAndCandidate.filter(
      ({ candidate }) => !Boolean(candidate),
    );

    return [
      {
        dataIssue: 'Employees Missing Candidate info',
        number: employeesWithoutCandidate.length,
      },
    ];
  }
}
