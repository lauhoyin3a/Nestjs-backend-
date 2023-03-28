import { Module } from '@nestjs/common';
import { OrderBookingService } from './order_booking.service';

@Module({
  providers: [OrderBookingService]
})
export class OrderBookingModule {}
