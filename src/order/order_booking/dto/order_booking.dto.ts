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

export class OrderBookingDto {
  @IsNotEmpty()
  @IsNumber()
  order_id: number;
  @IsNotEmpty()
  status: Booking_Status;
  @IsNotEmpty()
  @IsNumber()
  mentor_service_id: number;
  @IsNotEmpty()
  service_duration: number;
  @IsNotEmpty()
  service_price: number;
  @IsNotEmpty()
  start_dt: Date;
  @IsNotEmpty()
  end_dt: Date;
  zoom_link: string;
  file_path: string;
}
