import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderSubscriptionDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  status: Order_Status;

  @IsNotEmpty()
  order_id: number;
  @IsNotEmpty()
  subscription_id: number;
  @IsNotEmpty()
  subscription_name: string;
  @IsNotEmpty()
  subscription_price: number;
  end_dt: Date;
}
