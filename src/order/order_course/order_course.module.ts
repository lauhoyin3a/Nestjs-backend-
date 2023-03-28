import { Module } from '@nestjs/common';
import { OrderCourseService } from './order_course.service';
import { OrderCourseController } from './order_course.controller';

@Module({
  providers: [OrderCourseService],
  controllers: [OrderCourseController]
})
export class OrderCourseModule {}
