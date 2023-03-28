import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  status: Order_Status;

  @IsNotEmpty()
  type: Order_type;

  @IsNotEmpty()
  payment_method: Payment_Method;

  @IsNotEmpty()
  @IsNumber()
  redeem_coupon_id: number;

  @IsNotEmpty()
  @IsNumber()
  total_amount: number;
}
