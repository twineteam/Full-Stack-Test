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
    const employeesWithCandidate =
      this.employeeHelpers.getAllMatchedEmployeesWithCandidate();
    const employeesWithoutCandidate = employeesWithCandidate.filter(
      ({ candidate }) => !Boolean(candidate),
    );
    return [
      {
        dataIssue: 'Missing Candidate info',
        number: employeesWithoutCandidate.length,
      },
    ];
  }
}
