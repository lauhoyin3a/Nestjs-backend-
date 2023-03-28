import {
  Booking_Status,
  Order_Status,
  Order_type,
  Payment_Method,
} from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderBookingUpdateDto {
  status: Booking_Status;

  service_duration: number;
  service_price: number;
  start_dt: Date;
  end_dt: Date;
  zoom_link: string;
  file_path: string;
}
