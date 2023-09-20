import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

const FILE_PATH_PREFIX = './data';

@Injectable()
export class EmployeeHelpers {
  getCandidates(): any[] {
    const jsonData = fs.readFileSync(
      `${FILE_PATH_PREFIX}/candidates.json`,
      'utf8',
    );
    const parsedCandidates = JSON.parse(jsonData);
    return parsedCandidates;
  }

  getEmployees(): any[] {
    const jsonData = fs.readFileSync(
      `${FILE_PATH_PREFIX}/employees.json`,
      'utf8',
    );
    const parsedEmployees = JSON.parse(jsonData);
    return parsedEmployees;
  }

  getAllMatchedEmployeesWithCandidate(): any[] {
    const employees = this.getEmployees();
    const candidates = this.getCandidates();

    const employeesWithCandidates = employees.map((employee) => {
      const candidate = candidates.find(
        (candidate) =>
          candidate.firstName === employee.firstName &&
          candidate.lastName === employee.lastName,
      );
      return {
        ...employee,
        candidate,
      };
    });

    return employeesWithCandidates;
  }
}
