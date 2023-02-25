import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly managerService: StudentService) {}

    @Get()
    async getStatus(
     
    ) {
      try {
        const data = await this.managerService.findAll();
       return data
      } catch (err) {
      
        };
      }
    }

