import { CourseController } from './course.controller';
import { Module } from '@nestjs/common';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
