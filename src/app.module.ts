import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [TasksModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
