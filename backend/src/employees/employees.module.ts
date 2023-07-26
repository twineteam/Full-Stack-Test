import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeeHelpers } from './employees.helper';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeHelpers],
})
export class EmployeesModule {}
