import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderCourseModule } from './order_course/order_course.module';
import { OrderBookingController } from './order_booking/order_booking.controller';
import { OrderBookingModule } from './order_booking/order_booking.module';

@Module({
  providers: [OrderService],
  controllers: [OrderController, OrderBookingController],
  imports: [OrderCourseModule, OrderBookingModule],
})
export class OrderModule {}
