import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller({ path: 'employees', version: '1' })
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get('/data-issues')
  findActiveDataIssues() {
    return this.employeesService.findActiveDataIssues();
  }
}
