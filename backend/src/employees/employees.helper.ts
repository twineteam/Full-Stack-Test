import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as nanoid from 'nanoid';
import * as path from 'path';

const engineeringDepartment = {
  title: 'Engineering',
  departments: ['Engineering - Team 1', 'Engineering - Team 2'],
};
const divisionsAndDepartments = [
  engineeringDepartment,
  {
    title: 'Sales',
    departments: ['Sales - Team 1'],
  },
  {
    title: 'Marketing',
    departments: ['Marketing - Team 1'],
  },
  {
    title: 'Finance',
    departments: ['Finance - Team 1'],
  },
  {
    title: 'HR',
    departments: ['HR - Team 1', 'HR - Team 2'],
  },
];
const localFolder = 'data';

const writeFile = async (filePath: string, contents: string) => {
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await fs.promises.writeFile(filePath, contents);
  console.log(`> Dumped extract succesfully to: "${filePath}"`);
};

const FILE_PATH_PREFIX = './data';

@Injectable()
export class EmployeeHelpers {
  getCandidates(): any[] {
    const jsonData = fs.readFileSync(
      `${FILE_PATH_PREFIX}/candidates.json`,
      'utf8',
    );
    const parsedEmployees = JSON.parse(jsonData);
    return parsedEmployees;
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

  generateEmployees(): any[] {
    const employees = [];
    for (let i = 0; i < 888; i++) {
      const divisionObj =
        divisionsAndDepartments[
          Math.floor(Math.random() * divisionsAndDepartments.length)
        ];
      const departments = divisionObj.departments;

      const fakeEmployee = {
        id: nanoid.nanoid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.firstName(),
        division: divisionObj.title,
        department: departments[Math.floor(Math.random() * departments.length)],
      };
      employees.push(fakeEmployee);
    }

    // Create data issues
    // 1. [Matching] Same name in same divison, but different department
    for (let i = 0; i < 8; i++) {
      const randomEmployee =
        employees[Math.floor(Math.random() * employees.length)];
      const randomEmployeeTwo =
        employees[Math.floor(Math.random() * employees.length)];

      // Set randomEmployee
      randomEmployee.divsion = engineeringDepartment.title;
      randomEmployee.department = engineeringDepartment.departments[0];

      randomEmployeeTwo.firstName = randomEmployee.firstName;
      randomEmployeeTwo.lastName = randomEmployee.lastName;
      randomEmployeeTwo.divsion = randomEmployee.divsion;
      randomEmployeeTwo.department = engineeringDepartment.departments[1];

      console.log(
        `${randomEmployee.id} | ${randomEmployeeTwo.id} - same name & division - different department`,
      );
    }

    // 2. [Matching] 2 employees with missing name
    for (let i = 0; i < 2; i++) {
      const fakeEmployee = {
        id: nanoid.nanoid(),
        firstName: '',
        lastName: '',
        firstNameReal: faker.person.firstName(),
        lastNameReal: faker.person.lastName(),
        division: 'HR',
        department: i < 3 ? 'HR - Team 1' : 'HR - Team 2',
      };
      employees.push(fakeEmployee);
    }

    // 3. [Upstream] 2 employees with missing department & division. -->
    for (let i = 0; i < 2; i++) {
      const randomEmployee =
        employees[Math.floor(Math.random() * employees.length)];
      randomEmployee.department = null;
      randomEmployee.division = null;
      console.log(`${randomEmployee.id} | missing department & division`);
    }

    writeFile(`./${localFolder}/employees.json`, JSON.stringify(employees));
    return [];
  }

  generateCandidates(): any[] {
    const jsonData = fs.readFileSync(`./data/employees.json`, 'utf8');
    const parsedEmployees = JSON.parse(jsonData);

    const candidates = parsedEmployees.map((employee) => {
      return {
        id: nanoid.nanoid(),
        firstName: employee.firstName || employee.firstNameReal,
        lastName: employee.lastName || employee.lastNameReal,
        division: employee.division,
        department: employee.department,
      };
    });

    // 2. [Matching] 5 candidates with missing name
    for (let i = 0; i < 5; i++) {
      const randomCandidate =
        candidates[Math.floor(Math.random() * candidates.length)];
      randomCandidate.firstName = null;
      randomCandidate.lastName = null;
    }

    writeFile(
      `./${localFolder}/employees.json`,
      JSON.stringify(
        parsedEmployees.map((employee) => {
          delete employee.firstNameReal;
          delete employee.lastNameReal;
          return employee;
        }),
      ),
    );
    writeFile(`./${localFolder}/candidates.json`, JSON.stringify(candidates));
    return [];
  }
}

// import { EmployeeHelpers } from './src/employees/employees.helper';
// const e = new EmployeeHelpers();
// e.generateEmployees();
// e.generateCandidates();
